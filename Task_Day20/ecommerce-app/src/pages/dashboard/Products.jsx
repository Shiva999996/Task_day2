import { useProducts } from "../../context/ProductContext";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";
import ProductCard from "../../components/ProductCard";
import "./products.css";

const Products = () => {
  const { products, loading, error, deleteProduct } = useProducts();

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <p>Manage your store products</p>
      </div>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
