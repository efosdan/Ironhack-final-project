import React from "react";
import { useState } from "react";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleNameInput = (e) => setName(e.target.value);

  const handleDescriptionInput = (e) => setDescription(e.target.value);

  const handlePriceInput = (e) => setPrice(e.target.value);

  const handleImageInput = (e) => setImg(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, description, img };
  };

  return (
    <div>
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Price: </label>
        <input
          type="text"
          name="Price"
          value={price}
          onChange={handlePriceInput}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
        />

        <label>ImageUrl: </label>
        <input
          type="text"
          name="ImageUrl"
          value={img}
          onChange={handleImageInput}
        />

        <button type="submit">Add product</button>
      </form>
    </div>
  );
}

export default AddProduct;
