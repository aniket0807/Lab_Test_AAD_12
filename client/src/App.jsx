import React, { useState } from "react";
import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import AdmissionForm from "./components/AdmissionForm";
import ApplicationDetails from "./components/ApplicationDetails";
import "./App.css";

function App() {
  // Holds the most recently submitted application, or null if
  // nothing has been submitted yet. AdmissionForm calls
  // handleApplicationSubmit when the user submits valid data,
  // and that data then flows down to ApplicationDetails as a prop.
  const [submittedApplication, setSubmittedApplication] = useState(null);

  function handleApplicationSubmit(data) {
    setSubmittedApplication(data);
  }

  return (
    <div className="app">
      <Header />
      <CourseSection />
      <AdmissionForm onSubmit={handleApplicationSubmit} />
      <ApplicationDetails data={submittedApplication} />
      <footer className="site-footer">
        <p>Admissions Office &middot; open Monday to Saturday, 9 AM to 4 PM</p>
      </footer>
    </div>
  );
}

export default App;