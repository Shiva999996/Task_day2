import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getproducts } from '../services/productService';
import './ProductList.css';

const ProductList = () => {
  const {
    data = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: getproducts
  });

  if (isLoading) {
    return (
      <div className="grid">
        {[...Array(6)].map((_, i) => (
          <div className="card skeleton" key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="error">Failed to load products</p>;
  }

  if (data.length === 0) {
    return <p className="empty">No products available</p>;
  }

  return (
  <div className="page">
    <div className="container">
      <div className="grid">
        {data.map(product => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="card-body">
              <h4 className="title">{product.title}</h4>

              <div className="meta">
                <span className="price"> {product.price}</span>
                <span className="rating">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default ProductList;
