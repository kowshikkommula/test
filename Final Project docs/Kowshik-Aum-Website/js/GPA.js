// Grade point mapping
const gradePoints = {
  'A': 4.0,
  'B': 3.0,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0
};

const totalCourses = 5;
const minimumCourses = 2;

// Set focus on first input when page loads
window.onload = function() {
  document.getElementById('ch1').focus();
};

// Helper function to get numeric grade value
function getPoints(letterGrade) {
  if (!letterGrade) return null;
  const grade = letterGrade.trim().toUpperCase();
  return gradePoints[grade] !== undefined ? gradePoints[grade] : null;
}

// Validate credit hours input
function checkCredits(creditValue, courseNumber) {
  const credits = parseFloat(creditValue);
  if (isNaN(credits) || credits <= 0) {
    throw new Error(`Credit hours for Course ${courseNumber} must be a positive number.`);
  }
  return credits;
}

// Validate grade input
function checkGrade(gradeValue, courseNumber) {
  const points = getPoints(gradeValue);
  if (points === null) {
    throw new Error(`Grade for Course ${courseNumber} must be A, B, C, D, or F.`);
  }
  return points;
}

// Check if both inputs are empty
function bothEmpty(credits, grade) {
  return credits === '' && grade === '';
}

// Check if only one input is filled
function oneFilled(credits, grade) {
  return (credits === '' && grade !== '') || (credits !== '' && grade === '');
}

// Main GPA calculation function
function calculateGPA() {
  try {
    const validCourses = [];
    
    // Loop through all course inputs
    for (let i = 1; i <= totalCourses; i++) {
      const creditInput = document.getElementById(`ch${i}`).value;
      const gradeInput = document.getElementById(`gr${i}`).value;
      
      // Skip if both are empty
      if (bothEmpty(creditInput, gradeInput)) continue;
      
      // Error if only one is filled
      if (oneFilled(creditInput, gradeInput)) {
        throw new Error(`Please enter BOTH credit hours and grade for Course ${i}.`);
      }
      
      // Validate and add to array
      const credits = checkCredits(creditInput, i);
      const points = checkGrade(gradeInput, i);
      
      validCourses.push({ credits: credits, points: points });
    }
    
    // Check minimum course requirement
    if (validCourses.length < minimumCourses) {
      throw new Error(`Please enter at least ${minimumCourses} courses.`);
    }
    
    // Calculate totals
    let totalCredits = 0;
    let totalPoints = 0;
    
    for (let course of validCourses) {
      totalCredits += course.credits;
      totalPoints += (course.credits * course.points);
    }
    
    // Calculate and display GPA
    const gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('avgGpa').value = gpa;
    
  } catch (err) {
    alert(err.message);
    document.getElementById('avgGpa').value = '';
  }
}

// Reset all inputs
function resetGPA() {
  for (let i = 1; i <= totalCourses; i++) {
    document.getElementById(`ch${i}`).value = '';
    document.getElementById(`gr${i}`).value = '';
  }
  document.getElementById('avgGpa').value = '';
  document.getElementById('ch1').focus();
}