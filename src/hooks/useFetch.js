import { useState, useEffect } from "react";

export const useFetchCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        console.log("Fetching collections...");
        const response = await fetch("http://localhost:5000/api/store/collections");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched:", data);
        setCollections(data.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return { collections, loading, error };
};
