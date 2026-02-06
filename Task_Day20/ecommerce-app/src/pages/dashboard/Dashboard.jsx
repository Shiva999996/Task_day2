import { useProducts } from "../../context/ProductContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { products } = useProducts();

  const totalProducts = products.length;
  const totalValue = products.reduce(
    (sum, p) => sum + Number(p.price || 0),
    0
  );

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Inventory Value</h3>
          <p>₹{totalValue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
