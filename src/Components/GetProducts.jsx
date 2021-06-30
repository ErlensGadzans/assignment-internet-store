import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";

export default function GetProducts() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
}
