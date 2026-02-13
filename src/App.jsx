import React from 'react';
import './App.css';

function App() {
  // Prevent form from refreshing page on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Enrollment Submitted Successfully!");
  };

  return (
    <div className="App">
      <header>
        <h2>ADEi University</h2>
        <h3>Student Enrollment Portal</h3>
      </header>

      <form onSubmit={handleSubmit}>
        
        {/* GROUP 1: PERSONAL INFORMATION [cite: 40, 117] */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-container">
            <label>First Name <input type="text" required /></label>
            <label>Middle Name <input type="text" /></label>
            <label>Last Name <input type="text" required /></label>
            <label>Suffix <input type="text" placeholder="e.g. Jr, III" /></label>
            
            {/* Requirement: Date of Birth must be click-only  */}
            <label>Date of Birth 
              <input 
                type="date" 
                onKeyDown={(e) => e.preventDefault()} 
                required 
              />
            </label>
            
            <label>Gender
              <select required>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </label>
            
            <label>Nationality
              <select required>
                <option value="">--Select--</option>
                <option value="filipino">Filipino</option>
                <option value="american">American</option>
                <option value="chinese">Chinese</option>
                <option value="others">Others</option>
              </select>
            </label>
            
            <label>Religion <input type="text" required /></label>
          </div>
        </fieldset>

        {/* GROUP 2: CONTACT DETAILS [cite: 46, 123] */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-container">
            <label>Email Address <input type="email" required /></label>
            <label>Mobile Number <input type="tel" required /></label>
            <label>Landline <input type="tel" /></label>
            <label>Street Address <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
            <label>City <input type="text" required /></label>
            <label>Province <input type="text" required /></label>
            <label>Zip Code <input type="text" required /></label>
          </div>
        </fieldset>

        {/* GROUP 3: ACADEMIC HISTORY [cite: 51, 128] */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="grid-container">
            {/* Grade School Section */}
            <label>Grade School Name <input type="text" required /></label>
            <label>GS Address <input type="text" required /></label>
            <label>Year Graduated (GS) 
              <input type="number" min="1900" max="2026" required />
            </label>

            {/* Junior High School Section */}
            <label>Junior High Name <input type="text" required /></label>
            <label>JHS Address <input type="text" required /></label>
            <label>Year Graduated (JHS) 
              <input type="number" min="1900" max="2026" required />
            </label>

            {/* Senior High School Section [cite: 60-62] */}
            <label>Senior High Name <input type="text" required /></label>
            <label>SHS Address <input type="text" required /></label>
            <label>Year Graduated (SHS) 
              <input type="number" min="1900" max="2026" required />
            </label>
            <label>Grade Average 
              <input type="number" step="0.01" required />
            </label>
          </div>
        </fieldset>

        {/* GROUP 4: ENROLLMENT CHOICES [cite: 63, 132] */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          
          <div className="radio-section">
            <p>Academic Level:</p>
            <label><input type="radio" name="level" required /> Undergraduate</label>
            <label><input type="radio" name="level" /> Graduate</label>
          </div>

          <div className="radio-section">
            <p>Semester:</p>
            <label><input type="radio" name="semester" required /> First Semester</label>
            <label><input type="radio" name="semester" /> Second Semester</label>
          </div>

          <div className="radio-section">
            <p>Campus:</p>
            <label><input type="radio" name="campus" required /> Manila</label>
            <label><input type="radio" name="campus" /> Quezon City</label>
          </div>

          <div className="grid-container">
            <label>College Department
              <select required>
                <option value="">--Select College--</option>
                <option value="CEA">College of Engineering and Architecture</option>
                <option value="CCS">College of Computer Studies</option>
                <option value="CBE">College of Business Education</option>
              </select>
            </label>

            <label>Degree Program
              <select required>
                <option value="">--Select Program--</option>
                <option value="BS Architecture">BS Architecture</option>
                <option value="BS CpE">BS Computer Engineering</option>
                <option value="BS CS">BS Computer Science</option>
                <option value="BS IT">BS Information Technology</option>
              </select>
            </label>
          </div>
        </fieldset>

        {/* Final Requirement: Submit Button  */}
        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;