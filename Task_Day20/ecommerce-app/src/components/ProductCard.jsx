import { useState } from "react";
import EditProductModal from "./EditProductModal";
import "./productCard.css";

const ProductCard = ({ product, onDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">₹{product.price}</p>
        </div>

        <div className="product-actions">
          <button
            className="product-edit"
            onClick={() => setIsEditOpen(true)}
          >
            Edit
          </button>

          <button
            className="product-delete"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {isEditOpen && (
        <EditProductModal
          product={product}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
