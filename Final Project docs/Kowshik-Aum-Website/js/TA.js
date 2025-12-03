// Get checkbox elements for gender selection
const checkboxMale = document.querySelector('input[name="gender"][value="Male"]');
const checkboxFemale = document.querySelector('input[name="gender"][value="Female"]');

// Ensure only one gender checkbox is selected at a time
checkboxMale.addEventListener('change', function () {
    if (this.checked) {
        checkboxFemale.checked = false;
    }
});

checkboxFemale.addEventListener('change', function () {
    if (this.checked) {
        checkboxMale.checked = false;
    }
});

// Form submission validation
document.querySelector('form').addEventListener('submit', function (event) {
    const isMaleChecked = checkboxMale.checked;
    const isFemaleChecked = checkboxFemale.checked;
    
    if (!isMaleChecked && !isFemaleChecked) {
        event.preventDefault();
        alert('Please select a gender (M or F)');
    }
});