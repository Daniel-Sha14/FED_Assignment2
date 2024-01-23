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
        de
        $("#add-update-msg").show().faOut(3000);
  
        
        getContacts();
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
          
  
          
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].password}</td>
          <td>${response[i].gender}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-password='${response[i].password}' data-name='${response[i].name}' data-email='${response[i].email}' data-gender='${response[i].gender}'>Update</a></td></tr>`;
  
        }
  
        
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
  
  })