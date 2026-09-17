import React from "react";

// Simple presentational component — no props needed since the
// title is static, but you could pass it as a prop if you wanted
// this Header to be reused for other portals too.
function Header() {
  return (
    <header className="site-header">
      <h1>University Admission Portal</h1>
      <p className="site-header-subtitle">
        Explore our programs and submit your application for the upcoming
        academic session.
      </p>
      <span className="accent-rule" aria-hidden="true"></span>
    </header>
  );
}

export default Header;