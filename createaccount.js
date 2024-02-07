$(document).ready(function () {
    
  const APIKEY = "65af532fb8991708a3f38c7a";
  getContacts();
  $("#update-contact-container").hide();
  $("#add-update-msg").hide();


  $("#contact-submit").on("click", function (e) {
    
    e.preventDefault();

  
    let contactName = $("#contact-name").val();
    let contactEmail = $("#contact-email").val();
    let contactPassword = $("#contact-password").val();
    let contactGender = $("#contact-gender").val();

    
    let jsondata = {
      "name": contactName,
      "email": contactEmail,
      "password": contactPassword,
      "gender" : contactGender
    };

    
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://fedassg2-92e4.restdb.io/rest/login",
      "method": "POST", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        
        $("#contact-submit").prop( "disabled", true);
       
        $("#add-contact-form").trigger("reset");
      }
    }

    
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#contact-submit").prop( "disabled", false);
      
      $("#add-update-msg").show().fadeOut(3000);

      
      getContacts();
      window.location.href = "createaccount2.html"; // Redirect to createaccount2.html
    });
  });


  function getContacts(limit = 10, all = true) {

  
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://fedassg2-92e4.restdb.io/rest/login",
      "method": "GET", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }
    
    
    $.ajax(settings).done(function (response) {
      
      let content = "";

      for (var i = 0; i < response.length && i < limit; i++) {
        

        
        // content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
        // <td>${response[i].email}</td>
        // <td>${response[i].password}</td>
        // <td>${response[i].gender}</td>
        // <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-password='${response[i].password}' data-name='${response[i].name}' data-email='${response[i].email}' data-gender='${response[i].gender}'>Update</a></td></tr>`;
        content += `<tr id='${response[i]._id}'><td>${response[i].name}</td>
                  <td>${response[i].email}</td>
                  <td>${response[i].password}</td>
                  <td>${response[i].gender}</td>
                  <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td>
                  <td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-password='${response[i].password}' data-name='${response[i].name}' data-email='${response[i].email}' data-gender='${response[i].gender}'>Update</a></td></tr>`;
      }

      
      $("#contact-list tbody").html(content);

      $("#total-contacts").html(response.length);
    });


  }


});


//For checking if username and password matches in the restdb API
// $(document).ready(function () {
//   const APIKEY = "65af532fb8991708a3f38c7a";

//   // Event listener for login form submission
//   $("#login-form").submit(function (e) {
//       e.preventDefault();

//       // Retrieve email and password values from the form
//       let email = $("#login-email").val();
//       let password = $("#login-password").val();

//       // Prepare the data object to send with the AJAX request
//       let userData = {
//           "email": email,
//           "password": password
//       };

//       // AJAX request to check user credentials
//       $.ajax({
//           url: "https://fedassg2-92e4.restdb.io/rest/login",
//           type: "GET",
//           headers: {
//               "x-apikey": APIKEY,
//               "content-type": "application/json"
//           },
//           data: userData,
//           success: function (response) {
//               // Check if the response contains any user data
//               if (response.length > 0) {
//                   // User login successful
//                   alert("Login successful!");
//                   // Redirect to dashboard or another page
//                   window.location.href = "index.html";
//               } else {
//                   // No user found or invalid credentials
//                   alert("Invalid email or password. Please try again.");
//               }
//           },
//           error: function (xhr, status, error) {
//               console.error(xhr.responseText);
//               alert("An error occurred. Please try again later.");
//           }
//       });
//   });
// });



// $(document).ready(function () {
//   const APIKEY = "65af532fb8991708a3f38c7a";

//   // Event listener for login form submission
//   $("#login-form").submit(function (e) {
//       e.preventDefault();

//       // Retrieve email and password values from the form
//       let username = $("#Username").val();
//       let password = $("#Password").val();

//       // Check if username and password are not empty
//       if (username.trim() === "" || password.trim() === "") {
//           alert("Please enter both username and password.");
//           return;
//       }

//       // Prepare the data object to send with the AJAX request
//       let userData = {
//           "username": username,
//           "password": password
//       };

//       // AJAX request to check user credentials
//       $.ajax({
//           url: "https://fedassg2-92e4.restdb.io/rest/login",
//           type: "GET",
//           headers: {
//               "x-apikey": APIKEY,
//               "content-type": "application/json"
//           },
//           data: userData,
//           success: function (response) {
//               // Check if the response contains any user data
//               if (response.length > 0) {
//                   // User login successful
//                   /*alert("Login successful!");*/
//                   // Redirect to dashboard or another page
//                   window.location.href = "index.html";
//               } else {
//                   // No user found or invalid credentials
//                   alert("Invalid username or password. Please try again.");
//               }
//           },
//           error: function (xhr, status, error) {
//               console.error(xhr.responseText);
//               alert("An error occurred. Please try again later.");
//           }
//       });
//   });
// });

$(document).ready(function () {
  const APIKEY = "65af532fb8991708a3f38c7a";

  // Event listener for login form submission
  $("#login-form").submit(function (e) {
      e.preventDefault();

      // Retrieve username and password values from the form
      let username = $("#Username").val();
      let password = $("#Password").val();

      // Check if username and password are not empty
      if (username.trim() === "" || password.trim() === "") {
          alert("Please enter both username and password.");
          return;
      }

      // Prepare the data object to send with the AJAX request
      let userData = {
          "name": username,
          "password": password
          
      };

      // AJAX request to check user credentials
      $.ajax({
          url: "https://fedassg2-92e4.restdb.io/rest/login",
          type: "GET",
          headers: {
              "x-apikey": APIKEY,
              "content-type": "application/json"
          },
          // data: JSON.stringify(userData),
          // success: function (response) {
          //     // Check if the response contains any user data
          //     if (response.length > 0) {
          //         // User login successful
          //         // alert("Login successful!");
          //         // Redirect to dashboard or another page
          //         window.location.href = "index.html";
          //     } else {
          //         // No user found or invalid credentials
          //         alert("Invalid username or password. Please try again.");
          //     }
          // },
          // error: function (xhr, status, error) {
          //     console.error(xhr.responseText);
          //     alert("An error occurred. Please try again later.");
          // }
          success: function (response) {
            // Check if the response contains any user data
            if (response.length > 0) {
                // Iterate through the response array to find the matching user
                for (let i = 0; i < response.length; i++) {
                    if (response[i].password === userData.password && response[i].username === userData.username) {
                        // User login successful
                        localStorage.setItem('loggedInUser', JSON.stringify(response[i]));
                        // Redirect to dashboard or another page
                        window.location.href = "index.html";
                        return; // Exit the function after successful login
                    }
                }
                // If no matching user is found
                alert("Invalid username or password. Please try again.");
            } else {
                // No user found or response is empty
                alert("Invalid username or password. Please try again.");
            }
        }
      });
  });
});




