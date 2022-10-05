import React, { useState } from "react";

import ProductCard from "./ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Spaghetti",
    price: 150,
    qty: 1,
    description:
      "Arguably the most popular type of pasta in America, spaghetti is easy to recognize whether it’s covered in traditional tomato sauce or lightly drizzled with olive oil. Spaghetti is",
    img: "https://cleangreensimple.com/wp-content/uploads/spaghetti-800x533.jpg",
  },
  {
    id: 2,
    name: "Rotini",
    price: 100,
    qty: 1,
    description:
      "Rotini is a popular, corkscrew-shaped pasta used in a variety of dishes from salads to soups to ragu. While similar to fusilli, rotini has a flatter, more tightly twisted shape.",
    img: "https://cleangreensimple.com/wp-content/uploads/rotini-pasta-800x533.jpg",
  },
  {
    id: 3,
    name: "Bucatini",
    price: 109,
    qty: 1,
    description:
      "To the untrained eye, bucatini is easy to mistake for spaghetti. But if you look closer you will notice this rare type of pasta is a bit thicker than the more popular variety and it has a hole running through the center. This long, hollow noodle has the magic ability to suck up sauce so you can enjoy your pasta not just coated with tomato sauce or olive oil, but infused with it!",
    img: "https://st.depositphotos.com/1354644/4721/i/950/depositphotos_47211705-stock-photo-bucatini-raw-pasta.jpg",
  },
  {
    id: 4,
    name: "Cavatappi",
    price: 89,
    qty: 1,
    description:
      "Cavatappi, which means “corkscrew” in Italian, is easily one of the most fun pastas to eat. Depending on the variety, these little noodles can feature one to three full turns",
    img: "https://cleangreensimple.com/wp-content/uploads/cavatappi-pasta-800x600.jpg",
  },
  {
    id: 5,
    name: "Casarecce",
    price: 56,
    qty: 1,
    description:
      "Casarecce means “homemade” which gives you a pretty good idea of how this simple noodle came to be. Casarecce noodles look like little rolled-up scrolls and are made by cutting dough into squares and rolling them around with a wooden pin. ",
    img: "https://cleangreensimple.com/wp-content/uploads/casarecce-pasta-800x533.jpg",
  },
  {
    id: 6,
    name: "Conchiglie",
    price: 99,
    qty: 1,
    description:
      "More commonly known as shell pasta, this popular noodle variety comes in three different sizes. Conchigliette is the smallest and is common in soups and macaroni and cheese.",
    img: "https://cleangreensimple.com/wp-content/uploads/conchiglie-pasta-800x533.jpg",
  },
];

function Products({ handleClick }) {
  return (
    <main className="product-card-wrapper">
      {allProducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} handleClick = {handleClick} /

          </div>
        );
      })}
    </main>
  );
}

export default Products;
