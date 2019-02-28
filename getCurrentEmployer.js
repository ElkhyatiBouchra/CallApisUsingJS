

$( document ).ready(function() {
    if(!localStorage.getItem("SessionKey")) {
        console.log( "ready!" );
        location.href="loginPage.html"
        return;
    }
    //alert("im here");
   // $( "#spinnerPage" ).show();
    //$( "#hiddenHtml" ).hide();

    getCurrentEmployer();
});


function getCurrentEmployer() {
    var sessionKey = localStorage.getItem("SessionKey");
    var data = "";
    apicall("GET", "Employees/Current", data, sessionKey, doneFunction, failFunction, alwaysFunction);

    function doneFunction(response) {
        console.log("done");
        console.log(response);
        renderHTML(response);
    }
    function failFunction(response) {
        alert("error");
    }
    function alwaysFunction(response) {
        console.log("complet");
    }

    function renderHTML(data) {
        if (typeof data !== 'undefined') {
            //console.log(data.Id);
            $("#ID").html(data.Id);
            $("#FirstName").html(data.FirstName);
            $("#LastName").html(data.LastName);
            $("#Gender").html(data.Gender);
            $("#PhoneNumber").html(data.PhoneNumber);
            $("#Email").html(data.Email);
            console.log(data.Id);
            $("#hiddenHtml").css("display","block");
            $("#spinnerPage").replaceWith( $(("#hiddenHtml")));
           //$( "#spinnerPage" ).hide();
            //$( "#spinnerPage" ).css("display", "none");
            $( "#hiddenHtml" ).show();

        } else {
            console.log("undefined")
        }
    }
    

}
