function postdelete() {
    const fullname = $('#fullname').val();
    const email = $('#email').val();
    const username = $('#username').val();
    const password = $('#password').val();
    $.ajax({
        type: 'DELETE',
        url: '/delete', // This should match the route in your backend
        data: null,
        success: function (response) {
            window.location.replace("index.html");
            
        },
        error: function (error) {

        }
    });
}