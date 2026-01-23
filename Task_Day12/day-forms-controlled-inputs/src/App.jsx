import React, { useState } from "react";
import Form_cont_input from "./components/Form_cont_input";
import Display from "./components/Display";
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <div className="app-container">
      <Form_cont_input onAddUser={handleAddUser} />
      <Display users={users}/>
    </div>
  );
};

export default App;
