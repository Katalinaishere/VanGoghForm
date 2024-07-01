// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // You can add your custom logic here for form submission handling
      handleFormSubmission();
    });
  
    function handleFormSubmission() {
      // Basic example: Log form data to console
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      console.log('Form Data:', data);
  
      // You can add more advanced logic here, like sending data to a server or displaying messages
      // For now, this example just logs the form data to the console
    }
  });
  