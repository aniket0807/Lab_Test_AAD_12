import { useState } from "react";

import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import AdmissionForm from "./components/AdmissionForm";
import ApplicationDetails from "./components/ApplicationDetails";

import "./App.css";

function App() {
  const [applicant, setApplicant] = useState(null);

  const handleFormSubmit = (data) => {
    setApplicant(data);
  };

  return (
    <>
      <Header />

      <main>
        <CourseSection />

        <AdmissionForm
          onSubmit={handleFormSubmit}
        />

        <ApplicationDetails
          applicant={applicant}
        />
      </main>
    </>
  );
}

export default App;