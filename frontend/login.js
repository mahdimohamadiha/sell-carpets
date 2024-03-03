function login() {
    const username = $('#username').val();
    const password = $('#password').val();
    var error = document.getElementById("error");

    $.ajax({
        type: 'POST',
        url: '/login', // This should match the route in your backend
        data: { username: username, password: password },
        success: function (response) {
            if (response["login_check"] == "true") {
                
                window.location.replace("index.html");
            }
            if (response["login_check"] == "false") {
                error.hidden = false;
            }
        },
        error: function (error) {

        }
    });
}