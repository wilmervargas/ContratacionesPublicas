import os
import sqlite3
import tkinter as tk
from tkinter import ttk, messagebox

class TiposOrganismosDobleVinculacionViewer:
    def __init__(self, root, db_filename="tablas_cp.db"):
        self.root = root
        self.root.title("Tipos de Organismos (Vinculado a Niveles y Poderes)")
        self.root.geometry("1100x550")

        # Ruta absoluta para asegurar la conexión a la base de datos
        base_dir = os.path.dirname(os.path.abspath(__file__))
        self.db_path = os.path.join(base_dir, db_filename)

        # Panel de Búsqueda
        search_frame = ttk.Frame(self.root, padding=10)
        search_frame.pack(fill=tk.X)

        ttk.Label(search_frame, text="Buscar registro:").pack(side=tk.LEFT, padx=5)
        self.search_var = tk.StringVar()
        self.search_var.trace_add("write", self.on_search)
        self.search_entry = ttk.Entry(search_frame, textvariable=self.search_var, width=40)
        self.search_entry.pack(side=tk.LEFT, padx=5)

        # Tabla / Treeview
        table_frame = ttk.Frame(self.root, padding=10)
        table_frame.pack(fill=tk.BOTH, expand=True)

        self.tree = ttk.Treeview(table_frame, show="headings")
        
        vsb = ttk.Scrollbar(table_frame, orient=tk.VERTICAL, command=self.tree.yview)
        hsb = ttk.Scrollbar(table_frame, orient=tk.HORIZONTAL, command=self.tree.xview)
        self.tree.configure(yscrollcommand=vsb.set, xscrollcommand=hsb.set)

        self.tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")
        hsb.grid(row=1, column=0, sticky="ew")

        table_frame.grid_rowconfigure(0, weight=1)
        table_frame.grid_columnconfigure(0, weight=1)

        self.load_table_data()

    def load_table_data(self, filter_text=""):
        self.tree.delete(*self.tree.get_children())

        if not os.path.exists(self.db_path):
            messagebox.showerror("Error", f"No se encontró la base de datos:\n{self.db_path}")
            return

        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        try:
            # Inspeccionar columnas originales de la tabla tipos_organismos
            cursor.execute("PRAGMA table_info(tipos_organismos)")
            cols_tip = [col[1] for col in cursor.fetchall()]

            select_fields = []
            headers = []

            # Reconstruir columnas e inyectar vinculaciones dinámicamente
            for col in cols_tip:
                select_fields.append(f"t.{col}")
                headers.append(col)
                
                # 1. Vinculación Nivel de Poder
                if col == "codigo_nivel":
                    select_fields.append("IFNULL(n.nombre_nivel, 'SIN NIVEL') AS nombre_nivel")
                    headers.append("nombre_nivel")
                
                # 2. Vinculación Poder Público
                elif col == "codigo_poder":
                    select_fields.append("IFNULL(p.nombre_poder, 'SIN PODER') AS nombre_poder")
                    headers.append("nombre_poder")

            # Consulta SQL con DOBLE LEFT JOIN
            sql_query = f"""
                SELECT {', '.join(select_fields)}
                FROM tipos_organismos t
                LEFT JOIN niveles_poder n ON t.codigo_nivel = n.codigo_nivel
                LEFT JOIN poderes_publicos p ON t.codigo_poder = p.codigo_poder
                ORDER BY t.codigo_nivel ASC, t.codigo_poder ASC
            """
            
            cursor.execute(sql_query)
            rows = cursor.fetchall()

            # Configurar cabeceras y anchos en pantalla
            self.tree["columns"] = headers
            for header in headers:
                self.tree.heading(header, text=header)
                if header in ("nombre_nivel", "nombre_poder"):
                    width = 230
                else:
                    width = 130
                self.tree.column(header, width=width, anchor=tk.W)

            filter_text = filter_text.upper().strip()

            # Renderizar filas con datos vinculados
            for row in rows:
                str_row = [str(val) if val is not None else "" for val in row]
                if not filter_text or any(filter_text in val.upper() for val in str_row):
                    self.tree.insert("", "end", values=str_row)

        except sqlite3.OperationalError as e:
            messagebox.showerror("Error SQL", f"Fallo en la consulta de vinculación:\n{e}")
        finally:
            conn.close()

    def on_search(self, *args):
        self.load_table_data(filter_text=self.search_var.get())

if __name__ == "__main__":
    root = tk.Tk()
    app = TiposOrganismosDobleVinculacionViewer(root)
    root.mainloop()