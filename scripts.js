console.log("Hello!");

let day = $("#day")
let month = $("#month")
let dayValue = day.val()
let monthValue = month.val()

// return user birthday from dropdown menu
$(day).on("change", function(){
    dayValue=this.value;
    console.log(dayValue);
    if (!isNaN(dayValue) && !isNaN(monthValue)) {
        let sign=signFinder(dayValue, monthValue)
        }
})
$(month).on("change", function(){
    monthValue=this.value;
    console.log(monthValue)
    if (!isNaN(dayValue) && !isNaN(monthValue)) {
    let sign=signFinder(dayValue, monthValue)
    }
})

let signFinder = function (day, month) {
    let monthDay = `${month}/${day}`
    let starSign;
    
// append variables to Wikipedia queryURL search 
 var queryURL = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/" + monthDay;

// check queryURL
 console.log(queryURL);

// return response object data to card
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response); 
// card text
    let cardText = response.births[2].text;
    console.log(cardText);
    $("#text").text(cardText);
// card year
    let cardYear = response.births[2].year;
    console.log(cardYear);
    $("#year").text(cardYear);
// card thumbnail
    let cardThumbnail = response.births[2].pages[0].originalimage.source;
    console.log(cardThumbnail);
    $("#thumbnail").attr("src",cardThumbnail);
}); // end ajax call 

// horoscope js 
for (let i=0; i<signs.length; i++) {
    if (signs[i].startDate<= monthDay && monthDay <= signs[i].endDate) {
        starSign=signs[i].sign
        console.log(`Sign ${signs[i].sign}`)
        $("#star-sign").text(starSign)
        break;
    }
}

console.log(starSign);
if(starSign){


    $.ajax({
        type:'POST',
        url:`https://aztro.sameerkumar.website?sign=${starSign}&day=today`,
        success:function(data){
        console.log(data);
        }
   }).then(function (data) {
       $(".date-range").text(`${data.date_range}`);
       $(".description").text(`${data.description}`);
       $(".compatibility").text(`Compatibility: ${data.compatibility}`);
       $(".mood").text(`Mood: ${data.mood}`);
       $(".color").text(`Color: ${data.color}`);
   })
   //make a .then call to get the description from the returned ajax call and populate a corresponding html div class///id
}

}
const signs =[{
sign: "Aries",
startDate: "03/21",
endDate: "04/20"
},
{sign: "Taurus",
startDate: "04/20",
endDate: "05/20"
},
{sign: "Gemini",
startDate: "05/21",
endDate: "06/20"
},
{sign: "Cancer",
startDate: "06/21",
endDate: "07/22"
},
{sign: "Leo",
startDate: "07/23",
endDate: "08/22"
},
{sign: "Virgo",
startDate: "08/23",
endDate: "09/22"
},
{sign: "Libra",
startDate: "09/23",
endDate: "10/22"
},
{sign: "Scorpio",
startDate: "10/23",
endDate: "11/21"
},
{sign: "Sagittarius",
startDate: "11/22",
endDate: "12/21"
},
{sign: "Capricorn",
startDate: "12/22",
endDate: "12/31"
},
{sign: "Capricorn",
startDate: "01/01",
endDate: "01/19"
},
{sign: "Aquarius",
startDate: "01/20",
endDate: "02/18"
},
{sign: "Pisces",
startDate: "02/19",
endDate: "03/20"
}];