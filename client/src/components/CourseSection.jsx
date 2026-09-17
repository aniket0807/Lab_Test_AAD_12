import CourseCard from "./CourseCard";

function CourseSection() {
  return (
    <section>
      <h2>Available Courses</h2>

      <div className="course-container">

        <CourseCard
          name="BCA"
          duration="3 Years"
          eligibility="10+2 Pass"
          description="Bachelor of Computer Applications focusing on programming and software development."
        />

        <CourseCard
          name="BBA"
          duration="3 Years"
          eligibility="10+2 Pass"
          description="Bachelor of Business Administration focusing on management and business studies."
        />

        <CourseCard
          name="MCA"
          duration="2 Years"
          eligibility="Graduation"
          description="Master of Computer Applications focusing on advanced computing and software development."
        />

      </div>
    </section>
  );
}

export default CourseSection;