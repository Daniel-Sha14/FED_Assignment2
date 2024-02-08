
document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('.btn.btn-primary');

    submitButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the input element by its type
      var inputField = document.querySelector('input[type="text"]');
      
      // Check if the input field is empty
      if (inputField.value.trim() === '') {
        alert('Please fill out the input field before submitting.');
      } else {
        // Specify the URL of the page you want to redirect to
        var destinationURL = 'membership2.html';

        // Redirect to the specified page
        window.location.href = destinationURL;
      }
    });
  });

