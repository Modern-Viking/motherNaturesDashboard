$("#submitBtn").on("click", function(event){
    event.preventDefault();
currentWeather();

});

function currentWeather(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ $("#location").val().trim() +"&mode=JSON&units=imperial&APPID=af82351b67e679162e4cee80aed688f7";
    console.log(queryURL);
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response) {
        //set API data to an object
        var weather = {
            name: response.name,
            currentTemp: response.main.temp,
            description: response.weather[0].description,
            high: response.main.temp_max,
            low: response.main.temp_min,
            precip: response.main.humidity,
        }
        new currentWeatherDisplay(weather);
    })};
    
function currentWeatherDisplay(obj){
    //Removes any existing #current
    $("#current").remove();
    //Creates div#current
    var main = $("#current");
    //Cycles through obj passed in as function
    for (const key in obj) {
        //Creates new <p> with obj key and value
        var k= $(`<p>${[key]} ${obj[key]}</p>`);
        main.append(k)
    }
    $("#current").append(main);

};