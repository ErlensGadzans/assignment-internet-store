import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";

export default function GetProducts() {
  const [products, setProducts] = useState([]);
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    if (data) {
      setProducts(data.category.products);
    }
  }, [data]);

  return (
    <div>
      {products.map((value, id) => (
        <h1 key={id}>{value.name}</h1>
      ))}
    </div>
  );
}
