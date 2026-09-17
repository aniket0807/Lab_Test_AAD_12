function ApplicationDetails({ applicant }) {

  if (!applicant) {
    return null;
  }

  return (
    <section className="application-details">

      <h2>Application Submitted Successfully</h2>

      <h3>Applicant Information</h3>

      <p>
        <strong>Name:</strong> {applicant.name}
      </p>

      <p>
        <strong>Email:</strong> {applicant.email}
      </p>

      <p>
        <strong>Phone:</strong> {applicant.phone}
      </p>

      <p>
        <strong>Date of Birth:</strong> {applicant.dob}
      </p>

      <p>
        <strong>Course:</strong> {applicant.course}
      </p>

      <p>
        <strong>Address:</strong> {applicant.address}
      </p>

    </section>
  );
}

export default ApplicationDetails;