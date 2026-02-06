import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/client";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api("/products");
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateProduct = (updatedProduct) => {
  setProducts((prev) =>
    prev.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    )
  );
};


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, addProduct, deleteProduct ,updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
