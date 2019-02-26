
function logout(obj) {
    url="loginPage.html";
    localStorage.removeItem("SessionKey");
    location.href = url;
   
}