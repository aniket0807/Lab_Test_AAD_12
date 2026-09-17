function CourseCard({
  name,
  duration,
  eligibility,
  description
}) {
  return (
    <div className="course-card">

      <h3>{name}</h3>

      <p>
        <strong>Duration:</strong> {duration}
      </p>

      <p>
        <strong>Eligibility:</strong> {eligibility}
      </p>

      <p>
        <strong>Description:</strong> {description}
      </p>

    </div>
  );
}

export default CourseCard;