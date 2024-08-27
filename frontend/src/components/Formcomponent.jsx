import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/form",
        formData
      );
      setMessage(response.data);
    } catch (error) {
      setMessage("Error submitting form");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="pt-2 border-2"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pt-2 border-2"
          />
        </div>
        <div>
          <label>number:</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="pt-2 border-2"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-400 p-2 rounded-md w-full mt-2"
        >
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormComponent;
