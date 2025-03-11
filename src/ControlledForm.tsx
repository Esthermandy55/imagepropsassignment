import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const [inputValue, setInputValue] = useState("");
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col h-40">
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        className=""
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className=""
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        required
        className=""
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}
