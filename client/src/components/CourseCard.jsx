import React from "react";

// Reusable card — every course reuses this ONE component.
// Data comes in entirely through props (Question 12 requirement).
function CourseCard({ name, duration, eligibility, description }) {
  return (
    <div className="course-card">
      <h3>{name}</h3>
      <p className="course-duration">{duration}</p>
      <p>
        <strong>Eligibility:</strong> {eligibility}
      </p>
      <p className="course-description">{description}</p>
    </div>
  );
}

export default CourseCard;