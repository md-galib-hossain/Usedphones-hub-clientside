import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const products = useLoaderData();
  return <div>{products.length}</div>;
};

export default SingleCategory;
