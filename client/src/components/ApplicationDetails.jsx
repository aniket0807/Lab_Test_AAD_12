import React from "react";

// Purely presentational — receives the submitted applicant data
// as a prop and displays it. Renders nothing until App has data.
function ApplicationDetails({ data }) {
  if (!data) return null;

  return (
    <section className="application-details">
      <p className="success-message">
        <svg
          className="success-icon"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="10" fill="#1c7a4d" />
          <path
            d="M6 10.5l2.5 2.5L14 7.5"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Application Submitted Successfully
      </p>
      <div className="details-card">
        <p>
          <strong>Applicant Name:</strong> {data.applicantName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <p>
          <strong>Date of Birth:</strong> {data.dob}
        </p>
        <p>
          <strong>Course:</strong> {data.course}
        </p>
        <p>
          <strong>Address:</strong> {data.address}
        </p>
      </div>
    </section>
  );
}

export default ApplicationDetails;