import sqlite3
import tkinter as tk
from tkinter import ttk

class GeographicBrowser:
    def __init__(self, root, db_path="tablas_cp.db"):
        self.root = root
        self.root.title("Explorador Político-Territorial de Venezuela")
        self.root.geometry("800x600")
        self.db_path = db_path

        # Panel de Búsqueda
        search_frame = ttk.Frame(self.root, padding=10)
        search_frame.pack(fill=tk.X)

        ttk.Label(search_frame, text="Buscar (Estado/Municipio/Parroquia):").pack(side=tk.LEFT, padx=5)
        self.search_var = tk.StringVar()
        self.search_var.trace("w", self.on_search)
        self.search_entry = ttk.Entry(search_frame, textvariable=self.search_var, width=40)
        self.search_entry.pack(side=tk.LEFT, padx=5)

        # Árbol de navegación (Treeview)
        tree_frame = ttk.Frame(self.root, padding=10)
        tree_frame.pack(fill=tk.BOTH, expand=True)

        self.tree = ttk.Treeview(tree_frame, columns=("codigo", "tipo"), show="tree headings")
        self.tree.heading("#0", text="Ubicación Geográfica")
        self.tree.heading("codigo", text="Código")
        self.tree.heading("tipo", text="Tipo")

        self.tree.column("#0", width=400)
        self.tree.column("codigo", width=100, anchor=tk.CENTER)
        self.tree.column("tipo", width=150, anchor=tk.CENTER)

        scrollbar = ttk.Scrollbar(tree_frame, orient=tk.VERTICAL, command=self.tree.yview)
        self.tree.configure(yscrollcommand=scrollbar.set)

        self.tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

        self.load_data()

    def load_data(self, filter_text=""):
        self.tree.delete(*self.tree.get_children())
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        filter_text = filter_text.upper().strip()

        cursor.execute("SELECT codigo_estado, nombre_estado FROM estados ORDER BY codigo_estado")
        estados = cursor.fetchall()

        for cod_est, nom_est in estados:
            estado_matches = filter_text in nom_est
            
            # Cargar Municipios
            cursor.execute(
                "SELECT codigo_mcpio, nombre_mcpio FROM municipios WHERE codigo_estado = ? ORDER BY codigo_mcpio",
                (cod_est,)
            )
            municipios = cursor.fetchall()

            estado_node = None

            for cod_mcp, nom_mcp in municipios:
                mcp_matches = filter_text in nom_mcp

                # Cargar Parroquias
                cursor.execute(
                    "SELECT codigo_pquia, nombre_pquia FROM parroquias WHERE codigo_estado = ? AND codigo_mcpio = ? ORDER BY codigo_pquia",
                    (cod_est, cod_mcp)
                )
                parroquias = cursor.fetchall()

                pquia_nodes = [
                    (p_code, p_name) for p_code, p_name in parroquias if filter_text in p_name
                ]

                # Si coincide el filtro a cualquier nivel, mostramos la rama
                if not filter_text or estado_matches or mcp_matches or pquia_nodes:
                    if estado_node is None:
                        estado_node = self.tree.insert("", "end", text=nom_est, values=(cod_est, "Estado"), open=bool(filter_text))

                    mcp_node = self.tree.insert(estado_node, "end", text=nom_mcp, values=(f"{cod_est}-{cod_mcp}", "Municipio"), open=bool(filter_text))

                    # Mostrar parroquias correspondientes
                    target_pquias = parroquias if (estado_matches or mcp_matches or not filter_text) else pquia_nodes
                    for cod_pq, nom_pq in target_pquias:
                        self.tree.insert(mcp_node, "end", text=nom_pq, values=(f"{cod_est}-{cod_mcp}-{cod_pq}", "Parroquia"))

        conn.close()

    def on_search(self, *args):
        query = self.search_var.get()
        self.load_data(filter_text=query)

if __name__ == "__main__":
    root = tk.Tk()
    app = GeographicBrowser(root)
    root.mainloop()