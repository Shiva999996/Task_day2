import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import "./EditProductModal.css";

const EditProductModal = ({ product, onClose }) => {
  const { updateProduct } = useProducts();
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);

  const submit = (e) => {
    e.preventDefault();

    updateProduct({
      ...product,
      title,
      price,
    });

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={submit}>
        <h2>Edit Product</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product name"
          required
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          required
        />

        <div className="modal-actions">
          <button
            type="button"
            className="cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit" className="save">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
