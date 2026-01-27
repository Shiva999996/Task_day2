import React, { useState } from "react";
import "./Form.css";
import { validateField } from "./validation";

const Form_cont_input = ({ onAddUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone_no: "",
    date: new Date().toDateString()
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach(field => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // sending the data to app.js
    onAddUser(form);

  
    setForm({
      name: "",
      email: "",
      password: "",
      address: "",
      phone_no: "",
      date: new Date().toDateString()
    });

    setErrors({});
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Users Information</h2>

      <input name="name" value={form.name} placeholder="User Name" onChange={handleChange}/>
      <p className="error">{errors.name || ""}</p>

      <input name="email" value={form.email} placeholder="User Email" onChange={handleChange}/>
      <p className="error">{errors.email || ""}</p>

      <input type="password" name="password" value={form.password} placeholder="User Password" onChange={handleChange}/>
      <p className="error">{errors.password || ""}</p>

      <input name="address" value={form.address} placeholder="User Address" onChange={handleChange}/>
      <p className="error">{errors.address || ""}</p>

      <input name="phone_no" value={form.phone_no} placeholder="User Phone Number" onChange={handleChange}/>
      <p className="error">{errors.phone_no || ""}</p>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form_cont_input;
