import React, { useState } from 'react';
import './App.css';

function App() {
  const [academicLevel, setAcademicLevel] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Enrollment Form Submitted Successfully!");
  };

  return (
    <div className="App">
      <header>
        <h1>ADEi University Student Enrollment Portal</h1>
      </header>

      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFORMATION SECTION */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-container">
            <label className="required">First Name <input type="text" required /></label>
            <label>Middle Name (Optional) <input type="text" /></label>
            <label className="required">Last Name <input type="text" required /></label>
            <label>Suffix (Optional) <input type="text" placeholder="e.g., Junior" /></label>
            <label className="required">Date of Birth <input type="date" onKeyDown={(e) => e.preventDefault()} required /></label>
            <label className="required">Gender
              <select required>
                <option value="">--Select Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </label>
            <label className="required">Nationality <select required><option value="filipino">Filipino</option><option value="other">Other</option></select></label>
            <label className="required">Religion <input type="text" required /></label>
          </div>
        </fieldset>

        {/* CONTACT DETAILS SECTION */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-container">
            <label className="required">Email Address <input type="email" required /></label>
            <label className="required">Mobile Number <input type="tel" required /></label>
            <label>Landline Number (Optional) <input type="tel" /></label>
            <label className="required">Street Address <input type="text" required /></label>
            <label className="required">Barangay <input type="text" required /></label>
            <label className="required">City <input type="text" required /></label>
            <label className="required">Province <input type="text" required /></label>
            <label className="required">Zip Code <input type="text" required /></label>
          </div>
        </fieldset>

        {/* ACADEMIC HISTORY SECTION */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="grid-container">
            <label className="required">Grade School Name <input type="text" required /></label>
            <label className="required">Grade School Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label className="required">Grade School Address <input type="text" required /></label>
            <label className="required">Junior High School Name <input type="text" required /></label>
            <label className="required">Junior High School Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label className="required">Junior High School Address <input type="text" required /></label>
            <label className="required">Senior High School Name <input type="text" required /></label>
            <label className="required">Senior High School Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label className="required">Grade Point Average <input type="number" step="0.01" required /></label>
            <label className="required">Senior High School Address <input type="text" required /></label>
          </div>
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="radio-group">
            <p className="required">Academic Level:</p>
            <label><input type="radio" name="level" value="Undergraduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} required /> Undergraduate</label>
            <label><input type="radio" name="level" value="Graduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} /> Graduate</label>
          </div>
          
          <div className="grid-container">
            <label className="required">College Department
              <select required value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">--Select Department--</option>
                {academicLevel === "Undergraduate" && (
                  <>
                    <option value="CEA">College of Engineering and Architecture</option>
                    <option value="CCS">College of Computer Studies</option>
                    <option value="CBE">College of Business Education</option>
                    <option value="CAS">College of Arts and Sciences</option>
                  </>
                )}
                {academicLevel === "Graduate" && (
                  <>
                    <option value="DOC">Doctorate Degrees</option>
                    <option value="MA">Master's Degrees</option>
                  </>
                )}
              </select>
            </label>

            <label className="required">Degree Program
              <select required>
                <option value="">--Select Program--</option>
                {department === "CEA" && (
                  <>
                    <option>Bachelor of Science in Architecture</option>
                    <option>Bachelor of Science in Civil Engineering</option>
                    <option>Bachelor of Science in Computer Engineering</option>
                    <option>Bachelor of Science in Electrical Engineering</option>
                    <option>Bachelor of Science in Mechanical Engineering</option>
                  </>
                )}
                {department === "CCS" && (
                  <>
                    <option>Bachelor of Science in Computer Science</option>
                    <option>Bachelor of Science in Information Technology</option>
                    <option>Bachelor of Science in Data Science and Analytics</option>
                  </>
                )}
                {department === "DOC" && (
                  <>
                    <option>Doctor in Information Technology</option>
                    <option>Doctor of Philosophy in Computer Science</option>
                  </>
                )}
              </select>
            </label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;