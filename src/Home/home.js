import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="top-right-container">
        <i className="bi bi-arrow-right icon-top-right"></i>
        <button type="button" className="btn btn-success">Join Us </button>
      </div>
      <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Logo" className="logo" />
      
      <div className="second-section mt-5">
        <div className="text-left">
          <h2>SKILL SYNC</h2>
        </div>
        <div className="text-center mt-3">
          <h3>INTERVIEW MANAGEMENT SYSTEM</h3>
        </div>
      </div>

      <div className="about-section mt-5">
        <div className="about-left">
          <h2>About Us</h2>
          <p>
            Our platform is designed to simplify the way organizations manage job applications,
            interviews, and candidate evaluations. With a focus on efficiency and user-friendliness, we
            empower recruiters, HR managers, and administrators to handle every step of the hiring
            journey seamlessly. Whether you're posting job offers, scheduling interviews, or generating
            reports, our system provides the tools you need to make informed decisions and enhance
            productivity.
          </p>
        </div>
        <div className="about-right">
          <img src={`${process.env.PUBLIC_URL}/img1.png`} alt="About Us" className="about-image" />
          <p>
            At Interview Management System, we believe in the power of technology to transform
            recruitment. Our team is dedicated to delivering innovative solutions that save time, reduce
            administrative burdens, and improve the overall candidate experience. Join us in redefining
            the future of hiring.
          </p>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img2.png`} alt="About Us Visual" className="about-below-image" />

      <div className="what-we-do-section mt-5">
        <div className="what-we-do-left">
          <h2>What we do</h2>
          <p>Elevate your brand and make your mark in history.</p>
          <div className="button-grid">
            <button type="button" className="btn btn-outline-secondary">User Management →</button>
            <button type="button" className="btn btn-outline-secondary">Job Offer Management →</button>
            <button type="button" className="btn btn-outline-secondary">Application Tracking →</button>
          </div>
          <div className="button-grid mt-3">
            <button type="button" className="btn btn-outline-secondary">Application Submission →</button>
            <button type="button" className="btn btn-outline-secondary">Interview Coordination →</button>
            <button type="button" className="btn btn-outline-secondary">Interview Scheduling →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;