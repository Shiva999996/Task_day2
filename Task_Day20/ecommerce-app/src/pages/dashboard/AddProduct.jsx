import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./addProduct.css";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addProduct({ title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <div className="add-product-page">
      <h1 className="add-product-title">Add Product</h1>
      <p className="add-product-subtitle">
        Create a new product 
      </p>

      <form onSubmit={submit} className="add-product-form">
        <div className="add-product-field">
          <label>Product title</label>
          <input
            type="text"
            placeholder="Men's Cotton Jacket"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="add-product-field">
          <label>Price</label>
          <input
            type="number"
            placeholder="99.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button className="add-product-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
