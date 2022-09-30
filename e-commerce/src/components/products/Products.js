import React from "react";
import Grid from "@mui/material";

const products = [
  {
    id: 1,
    name: "Angel Hair",
    description:
      "Known in Italy as capelli d’angelo, angel hair pasta is a thinner version of capellini, which itself is a thin version of spaghetti. It is often sold woven into a nest shape and is a great choice for adding to soups, for use with seafood dishes, or to enjoy with a light sauce.",
  },
  {
    id: 2,
    name: "Bucatini",
    description:
      "To the untrained eye, bucatini is easy to mistake for spaghetti. But if you look closer you will notice this rare type of pasta is a bit thicker than the more popular variety and it has a hole running through the center. This long, hollow noodle has the magic ability to suck up sauce so you can enjoy your pasta not just coated with tomato sauce or olive oil, but infused with it!",
  },
  {
    id: 3,
    name: "Spaghetti",
    description:
      "Arguably the most popular type of pasta in America, spaghetti is easy to recognize whether it’s covered in traditional tomato sauce or lightly drizzled with olive oil. Spaghetti is also popular in Italy where it became one of the first mass-produced pasta varieties available.",
  },
  {
    id: 4,
    name: "Rotini",
    description:
      "Rotini is a popular, corkscrew-shaped pasta used in a variety of dishes from salads to soups to ragu. While similar to fusilli, rotini has a flatter, more tightly twisted shape.",
  },
];

function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid>;
        })}
      </Grid>
    </main>
  );
}

export default Products;
