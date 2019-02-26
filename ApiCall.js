var baseUrl = "http://jobmymy-001-site2.ftempurl.com/api/";
function apicall(method, url, data, auth, donefunction, failfunction, alwaysfunction) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": baseUrl + url,
        "method": method,
        "headers": {
            "authorization": "Basic " + auth,
            "content-type": "application/json"
        },
        "processData": false,
        "data": data
         

    }

    $.ajax(settings).done(function (response) { donefunction(response); });
    $.ajax(settings).fail(function (response) { failfunction(response); });
    $.ajax(settings).always(function (response) { alwaysfunction(response) });

}
