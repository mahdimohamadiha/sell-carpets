function postedit() {
    const fullname = $('#fullname').val();
    const email = $('#email').val();
    const username = $('#username').val();
    const password = $('#password').val();
    $.ajax({
        type: 'PUT',
        url: '/edit', // This should match the route in your backend
        data: { fullname: fullname, email: email, username: username, password: password },
        success: function (response) {
            window.location.replace("index.html");
            
        },
        error: function (error) {

        }
    });
}