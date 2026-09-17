import React from "react";
import CourseCard from "./CourseCard";

// Holds the course data and maps it into three CourseCard elements.
// Keeping the data here (instead of in App) keeps App.jsx focused
// on wiring things together.
const courses = [
  {
    id: 1,
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    eligibility: "10+2 in any stream with Mathematics",
    description:
      "A foundational program covering programming, databases, and web technologies.",
  },
  {
    id: 2,
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "Bachelor's degree with Mathematics/Computer Science",
    description:
      "An advanced program focused on software development, systems design, and AI.",
  },
  {
    id: 3,
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
    description:
      "A management-focused program covering business fundamentals and leadership.",
  },
];

function CourseSection() {
  return (
    <section className="course-section">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            name={course.name}
            duration={course.duration}
            eligibility={course.eligibility}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseSection;