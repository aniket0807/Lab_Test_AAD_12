import { useState } from "react";

function AdmissionForm({ onSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.dob ||
      !formData.course ||
      !formData.address
    ) {
      alert("Please fill all the fields.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <section className="form-section">

      <h2>Admission Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Applicant Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label>Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="MCA">MCA</option>
        </select>

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Submit Application
        </button>

      </form>

    </section>
  );
}

export default AdmissionForm;