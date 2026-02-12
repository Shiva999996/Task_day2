import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./Layout";
import "./App.css";


const Header = () => <h1>Dashboard</h1>;
const Sidebar = () => <p>Sidebar Menu</p>;
const Dashboard = () => <p>Main Content Area</p>;

const App = () => {
  return (
    <div>
      <Button 
        label="Click Me"
        variant="primary"
        onClick={() => alert("Button clicked")} />

      <Card title="Patient Details">
        <p>Name:Shiva</p>
        <p>Age: 24</p>
        <Button
          label="View Report"
          variant="success"
          onClick={() => alert("Viewing report")} />
      </Card>

    
      <Layout
        header={<Header />}
        sidebar={<Sidebar />}
        content={<Dashboard />}
      />


    </div>
  );
};

export default App;
