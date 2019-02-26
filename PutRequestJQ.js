$( document ).ready(function() {
  if(!localStorage.getItem("SessionKey")) {
      console.log( "ready!" );
      location.href="loginPage.html"
  }
});

function editEmployer() {
    var sessionKey = localStorage.getItem("SessionKey");
    var data= "{\n  \"FirstName\": \"username\",\n  \"LastName\": \"test2\",\n  \"Gender\": \"Male\",\n  \"PhoneNumber\": \"0668123 123\",\n  \"Email\": \"user@users.com\"\n}"

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
