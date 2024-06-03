import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/store/collections");
      const data = await response.json();
      setCollections(data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ collections, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
