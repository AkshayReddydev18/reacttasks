import React, { useState } from "react";
import "./index.css";

const FormSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Reset form fields
    setFormData({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <h1> Task9 Form Submission</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
          <legend>Fill The Details</legend>
          <div class="data">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone No:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
          </fieldset>
        </form>

        {submittedData && (
          <div class="card">
            <h2>Submitted Data</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Phone No:</strong> {submittedData.phone}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormSubmission;
