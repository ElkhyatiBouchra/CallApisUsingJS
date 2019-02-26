function login(obj) {
    var sender = $(obj);
    var id = sender.prop("id");
    url="dashboardPage.html";
    console.log(id);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //var confirmpassword = document.getElementById("confirmpassword").value;
    var spinner=' <span id="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    sender.append(spinner);
    

    var data = JSON.stringify({
        "Email": email,
        "Password": password,
        //"ConfirmPassword": confirmpassword
    });
    var sessionKey = '';


    apicall("POST", "Employees/LogIn", data, sessionKey, doneFunction, failFunction, alwaysFunction);
    sender.find("#loading").show();

    function doneFunction(response) {
        console.log(response.SessionKey);
        localStorage.setItem("SessionKey", response.SessionKey);
        location.href=url;

    }
    function failFunction(response) {
        alert("error");
    }
    function alwaysFunction(response) {
        sender.find("#loading").remove();
    }
}