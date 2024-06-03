import React, { useContext } from "react";
import { ProductsContext } from "../context/FetchContext";
import { Carousel } from "../components/Carousel";
import { Offer } from "../components/Offer";
export const HomePage = () => {
  const { collections, loading, error } = useContext(ProductsContext);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Carousel collections={collections} />
      <Offer collections={collections} />
    </div>
  );
};
