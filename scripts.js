console.log("Hello!");

// submit button click event

// return user input birthday
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    let birthdayInput = $("#birthdayInput").val();
    console.log(birthdayInput);

// create birthday month and day variables to append to queryURL
    let birthdayMonth = moment(birthdayInput, "MM-DD-YY").format("MM");
    let birthdayDay = moment(birthdayInput, "MM-DD-YY").format("DD");
    
// append variables to Wikipedia queryURL search 
 var queryURL = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/" + birthdayMonth + "/" + birthdayDay;

// check queryURL
 console.log(queryURL);

// return response object
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response); 

// response object data for loop
for (let index = 0; index < 3; index++) {
// card text
    let cardText = response.births[index].text;
    console.log(cardText);
    $("#text").text(cardText);
// card year
    let cardYear = response.births[index].year;
    console.log(cardYear);
    $("#year").text(cardYear);
// card thumbnail
    let cardThumbnail = response.births[index].pages[0].originalimage.source;
    console.log(cardThumbnail);
    $("#thumbnail").attr("src",cardThumbnail);
}

        
/*
// for each loop to create html objects    
    response.births.forEach(function (item){
        let cardText = response.births[0];
        console.log(cardText);
});
*/
    

}); // end ajax call

}); // end submit button click event


