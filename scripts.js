console.log("Hello!");

// return user birthday
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    let birthdayInput = $("#birthdayInput").val();
    console.log(birthdayInput);

    let birthdayMonth = moment(birthdayInput, "MM-DD-YY").format("MM");
    let birthdayDay = moment(birthdayInput, "MM-DD-YY").format("DD");

// append user birthday to Wikipedia queryURL search 
 var queryURL = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/" + birthdayMonth + "/" + birthdayDay;

 console.log(queryURL);
})
   