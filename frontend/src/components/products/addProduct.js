import React from "react";
import "../../index.css";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      price,
      description,
      qty,
      img,
    };

    axios
      .post(`${API_URL}/api/products`, requestBody)
      .then((response) => {
        setName("");
        setPrice(1);
        setDescription("");
        setQty(1);
        setImg("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddProduct">
      <h3>Add New Product</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <label>Quantity</label>
        <input
          type="number"
          name="qty"
          onChange={(e) => setQty(e.target.value)}
          value={qty}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Image link</label>
        <input
          type="text"
          name="img"
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
