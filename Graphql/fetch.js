import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      image
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      {data.products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <img src={product.image} alt={product.name} width="100" />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
