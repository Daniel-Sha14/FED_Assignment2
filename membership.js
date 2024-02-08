

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('membership-form');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Check if all input fields are filled
      var inputs = form.querySelectorAll('input[required]');
      var allFilled = true;
      inputs.forEach(function (input) {
          if (input.value.trim() === '') {
              allFilled = false;
          }
      });

      // Redirect if all fields are filled
      if (allFilled) {
          var destinationURL = 'membership2.html';
          window.location.href = destinationURL;
      } else {
          alert('Please fill out all the required fields.');
      }
  });
});