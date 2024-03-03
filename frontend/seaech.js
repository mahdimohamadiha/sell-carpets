function search() {
    var searchInput = document.getElementById("searchInput");
    var objectListContainer = document.getElementById('objectList');
    var elements = document.getElementsByClassName('card');
    console.log(searchInput.value)
    let searchResult = []
    $.ajax({
        type: 'GET',
        url: '/carpets', // This should match the route in your backend
        data: {"aa": "aa"},
        success: function (response) {
            for (let i = 0; i < response.length; i++)
            {
                if(response[i]["title"] ==  searchInput.value) {
                    searchResult.push(response[i])
                }
            }
            console.log(searchResult)
            if (searchResult.length != 0){
                objectListContainer.className = 'card';
                objectListContainer.innerHTML = `
                <img src="`+ searchResult[0].imageurl +`" alt="Image 1">
                    <div class="card-content">
                        <h2>`+ searchResult[0].title +`</h2>
                        <p>`+ searchResult[0].description +`</p>
                    </div>`
            }
            else {
                objectListContainer.innerHTML = ''
            }
            
            // Iterate through the array of objects
            // arrayOfObjects.forEach(function(object) {
            //     // Create a div element for each object
            //     var objectDiv = document.createElement('div');
            //     objectDiv.className = 'card';

            //     // Add HTML content for each object
            //     objectDiv.innerHTML = `<div calss="card"><img src="`+ object.imageurl +`" alt="Image 1">
            //     <div class="card-content">
            //         <h2>`+ object.title +`</h2>
            //         <p>`+ object.description +`</p>
            //     </div></div>`

            //     // Append the object div to the container
            //     // for (let i = 0; i <= elements.length; ++i )
            //     // {

            //     //     elements[i].remove();
            //     // }
            //     // console.log(elements)
            //     // elements[0].remove();
            //     // elements[1].remove();
            //     // elements[2].remove();
            //     objectListContainer.appendChild(objectDiv);
            // });
            
        },
        error: function (error) {

        }
    });
}