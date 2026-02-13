import React, { useState } from 'react';
import './App.css';

function App() {
  const [academicLevel, setAcademicLevel] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Form Submitted Successfully!");
  };

  return (
    <div className="App">
      <header>
        <h2>ADEi University Student Enrollment Portal</h2>
      </header>

      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-container">
            <label>First Name <input type="text" required /></label>
            <label>Middle Name <input type="text" /></label>
            <label>Last Name <input type="text" required /></label>
            <label>Suffix <input type="text" placeholder="e.g. Jr." /></label>
            <label>Date of Birth <input type="date" onKeyDown={(e) => e.preventDefault()} required /></label>
            <label>Gender
              <select required>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </label>
            <label>Nationality <select required><option value="filipino">Filipino</option><option value="other">Other</option></select></label>
            <label>Religion <input type="text" required /></label>
          </div>
        </fieldset>

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-container">
            <label>Email <input type="email" required /></label>
            <label>Mobile Number <input type="tel" required /></label>
            <label>Landline <input type="tel" /></label>
            <label>Street Address <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
            <label>City <input type="text" required /></label>
            <label>Province <input type="text" required /></label>
            <label>Zip Code <input type="text" required /></label>
          </div>
        </fieldset>

        {/* ACADEMIC HISTORY */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="grid-container">
            <label>GS School Name <input type="text" required /></label>
            <label>GS Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>GS Address <input type="text" required /></label>
            <label>JHS School Name <input type="text" required /></label>
            <label>JHS Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>JHS Address <input type="text" required /></label>
            <label>SHS School Name <input type="text" required /></label>
            <label>SHS Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>Grade Average <input type="number" step="0.01" required /></label>
            <label>SHS Address <input type="text" required /></label>
          </div>
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="radio-group">
            <p>Academic Level:</p>
            <label><input type="radio" name="level" value="Undergraduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} required /> Undergraduate</label>
            <label><input type="radio" name="level" value="Graduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} /> Graduate</label>
          </div>
          <div className="radio-group">
            <p>Semester:</p>
            <label><input type="radio" name="sem" required /> 1st Semester</label>
            <label><input type="radio" name="sem" /> 2nd Semester</label>
          </div>
          <div className="radio-group">
            <p>Campus:</p>
            <label><input type="radio" name="campus" required /> Manila</label>
            <label><input type="radio" name="campus" /> Quezon City</label>
          </div>

          <div className="grid-container">
            <label>College Department
              <select required value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">--Select Dept--</option>
                {academicLevel === "Undergraduate" && (
                  <>
                    <option value="CEA">Engineering & Architecture</option>
                    <option value="CCS">Computer Studies</option>
                    <option value="CBE">Business Education</option>
                    <option value="CAS">Arts</option>
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

            <label>Degree Program
              <select required>
                <option value="">--Select Program--</option>
                {department === "CEA" && (
                  <>
                    <option>BS Architecture</option><option>BS Chemical Engineering</option>
                    <option>BS Civil Engineering</option><option>BS Computer Engineering</option>
                    <option>BS Electrical Engineering</option><option>BS Electronics Engineering</option>
                    <option>BS Industrial Engineering</option><option>BS Mechanical Engineering</option>
                  </>
                )}
                {department === "CCS" && (
                  <>
                    <option>BS Computer Science</option><option>BS Data Science and Analytics</option>
                    <option>BS Entertainment and Multimedia Computing</option><option>BS Information Technology</option>
                  </>
                )}
                {department === "CBE" && (
                  <>
                    <option>BS Accountancy</option><option>BS Accounting Information System</option>
                    <option>BSBA Financial Management</option><option>BSBA Human Resource Management</option>
                    <option>BSBA Logistics & Supply Chain</option><option>BSBA Marketing Management</option>
                  </>
                )}
                {department === "CAS" && (
                  <>
                    <option>AB English Language</option><option>AB Political Science</option>
                  </>
                )}
                {department === "DOC" && (
                  <>
                    <option>Doctor in IT</option><option>Doctor of Engineering (CpE)</option><option>PhD Computer Science</option>
                  </>
                )}
                {department === "MA" && (
                  <>
                    <option>Master in Information Systems</option><option>Master in IT</option>
                    <option>Master of Engineering (Civil/CpE/EE/ECE/IE/ME)</option>
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