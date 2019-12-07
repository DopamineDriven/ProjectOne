console.log("Hello!");

//submit button click event

    // return user input birthday
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    let birthdayInput = $("#birthdayInput").val();
    console.log(birthdayInput);

    // create birthday month and day variables to append to queryURL
    let birthdayMonth = moment(birthdayInput, "MM-DD-YY").format("MM");
    let birthdayDay = moment(birthdayInput, "MM-DD-YY").format("DD");
    
    // append variables to Wikipedia queryURL search 
 var queryURL = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/" + birthdayMonth + "/" + birthdayDay;

    // check queryURL
 console.log(queryURL);

    // return response object
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});

});


