$( document ).ready(function() {
  if(!localStorage.getItem("SessionKey")) {
      console.log( "ready!" );
      location.href="loginPage.html"
  }
  getCurrentEmployer();
  editEmployer();
});
function getCurrentEmployer() {
  var sessionKey = localStorage.getItem("SessionKey");
  var data = "";
  apicall("GET", "Employees/Current", data, sessionKey, doneFunction, failFunction, alwaysFunction);

  function doneFunction(response) {
      console.log("done");
      console.log(response);
      renderHTML(response);
      getDataFromForm();
  }
  function failFunction(response) {
      alert("error");
  }
  function alwaysFunction(response) {
      console.log("complet");
  }
}
  function renderHTML(data) {
      if (typeof data !== 'undefined') {
          //console.log(data.Id);
          
         console.log(data.FirstName);
         $("#FirstName").val(data.FirstName);
          $("#LastName").val(data.LastName);
          $("#Gender").val(data.Gender);
          $("#PhoneNumber").val(data.PhoneNumber);
          $("#Email").val(data.Email);
          console.log(data.Id);
          $("#hiddenHtml").css("display","block")

          $("#spinnerPage").replaceWith( $(("#hiddenHtml")));
         //$( "#spinnerPage" ).hide();
          //$( "#spinnerPage" ).css("display", "none");
         // $( "#hiddenHtml" ).show();

      } else {
          console.log("undefined")
      }
  }
  function getDataFromForm()
  {
    var FirstName = $("#FirstName").val();
    var LastName = $("#LastName").val();
    var Gender= $("#Gender").val();
    var PhoneNumber= $("#PhoneNumber").val();
    var Email=$("#Email").val();
    
     data = JSON.stringify({
       /* "FirstName": FirstName,
        "LastName": LastName,
        "Gender": Gender,
        "PhoneNumber": PhoneNumber,
        "Email": Email,*/
        
  "FirstName": "user1",
  "LastName": "test2",
  "Gender": "Male",
  "PhoneNumber": "123 123",
  "Email": "user@users.com"
    });
     return data;
  }



function editEmployer() {
    var sessionKey = localStorage.getItem("SessionKey");
    var data=getDataFromForm();
    alert(data);


    apicall("PUT", "/Employees", data, sessionKey, doneFunction, failFunction, alwaysFunction);
     
    function doneFunction(response) { 
      alert("done");
     }
  function failFunction(response) {
      alert("error");
  }
  function alwaysFunction(response) {
      alert("complet")}
  
  
     
}
