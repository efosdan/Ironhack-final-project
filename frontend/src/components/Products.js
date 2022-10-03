import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./products/productCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Spaghetti",
    price: "$150",
    description:
      "Arguably the most popular type of pasta in America, spaghetti is easy to recognize whether it’s covered in traditional tomato sauce or lightly drizzled with olive oil. Spaghetti is also popular in Italy where it became one of the first mass-produced pasta varieties available.",
  },
  {
    id: 2,
    name: "Rotini",
    price: "$100",
    description:
      "Rotini is a popular, corkscrew-shaped pasta used in a variety of dishes from salads to soups to ragu. While similar to fusilli, rotini has a flatter, more tightly twisted shape.",
  },
  {
    id: 3,
    name: "Bucatini",
    price: "$109",
    description:
      "To the untrained eye, bucatini is easy to mistake for spaghetti. But if you look closer you will notice this rare type of pasta is a bit thicker than the more popular variety and it has a hole running through the center. This long, hollow noodle has the magic ability to suck up sauce so you can enjoy your pasta not just coated with tomato sauce or olive oil, but infused with it!",
  },
  {
    id: 4,
    name: "Cavatappi",
    price: "$89",
    description:
      "Cavatappi, which means “corkscrew” in Italian, is easily one of the most fun pastas to eat. Depending on the variety, these little noodles can feature one to three full turns, but any less than one, and they become just a twisted version of elbow pasta. Cavatappi is most commonly enjoyed with tomato sauces.",
  },
];

function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}

export default Products;
