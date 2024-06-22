import React from "react";
export default function ListRendering() {
  //   const products = ["laptop", "phone", "sim","laptop"];
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 },
    { id: 3, name: "Sim", price: 50 },
    { id: 4, name: "Laptop", price: 900 },
  ];
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}:₹{product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

//this rendering is without list of objects...
//by this method the key values will have same id's.
//so we have to use list/ array of objects for having unique id's.
