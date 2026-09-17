import React, { useState } from "react";

// Controlled form. All fields live in one state object.
// On submit, it validates required fields and — if valid —
// passes the collected data up to App via the onSubmit prop.
function AdmissionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    address: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading

    // Basic validation — every field is required
    const isEmpty = Object.values(formData).some((value) => value.trim() === "");
    if (isEmpty) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setError("");
    onSubmit(formData); // hand the finished data up to App
  }

  return (
    <section className="admission-form-section">
      <h2>Admission Application Form</h2>
      <form className="admission-form" onSubmit={handleSubmit}>
        <label>
          Applicant Name
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Date of Birth
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>

        <label className="full-width">
          Course
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">-- Select a course --</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
          </select>
        </label>

        <label className="full-width">
          Address
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
          />
        </label>

        {error && <p className="form-error full-width">{error}</p>}

        <button type="submit" className="full-width">
          Submit Application
        </button>
      </form>
    </section>
  );
}

export default AdmissionForm;