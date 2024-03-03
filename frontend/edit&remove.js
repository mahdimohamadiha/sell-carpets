function editRemove() {
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    $.ajax({
        type: 'GET',
        url: '/edit&remove', // This should match the route in your backend
        data: {"aa": "aa"},
        success: function (response) {
            fullname.value = response["fullname"]
            email.value = response["email"]
            username.value = response["username"]
            password.value = response["password"]
            
        },
        error: function (error) {

        }
    });
}

