function home() {
    var fullname = document.getElementById("fullname");
    $.ajax({
        type: 'GET',
        url: '/home', // This should match the route in your backend
        data: {"aa": "aa"},
        success: function (response) {
            if (response["isFullname"] == true){
                fullname.hidden = false
                fullname.text = response["fullname"]
            }
            else {
                fullname.hidden = true
            }
            
        },
        error: function (error) {

        }
    });

    // var arrayOfObjects = [
    //     { id: '1', title: 'فرش شاه عباسی سرمه ای', description: 'فرش شاه‌ عباسی برای اولین بار در دوران شاه عباس صفوی در اصفهان بافته شد. به همین دلیل این طرح به نام شاه عباس ثبت شده است.' , imageurl: '../assets/images/pic4.jpg' }
    // ];

    var objectListContainer = document.getElementById('objectList');

    $.ajax({
        type: 'GET',
        url: '/carpets', // This should match the route in your backend
        data: {"aa": "aa"},
        success: function (response) {
            arrayOfObjects = response
            id = 0;
            // Iterate through the array of objects
            arrayOfObjects.forEach(function(object) {
                // Create a div element for each object
                var objectDiv = document.createElement('div');
                objectDiv.className = 'card';

                // Add HTML content for each object
                objectDiv.innerHTML = `<img src="`+ object.imageurl +`" alt="Image 1">
                <div class="card-content">
                    <h2>`+ object.title +`</h2>
                    <p>`+ object.description +`</p>
                    <a href="#" onclick="buy(`+object.id+`)" class="buy-button">خرید</a>
                </div>`

                // Append the object div to the container
                objectListContainer.appendChild(objectDiv);
            });
            
        },
        error: function (error) {

        }
    });
    
}

function buy(id) {
    $.ajax({
        type: 'POST',
        url: '/buy', // This should match the route in your backend
        data: {"id": id},
        success: function (response) {
            
            
        },
        error: function (error) {

        }
    });
}