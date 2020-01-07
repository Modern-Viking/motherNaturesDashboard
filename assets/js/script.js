var weather = weather;

function currentWeather(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ $("#location").val().trim() +"&mode=JSON&units=imperial&APPID=af82351b67e679162e4cee80aed688f7";
    console.log(queryURL);
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response) {
        //set API data to an object
        weather = {
            Name: response.name,
            currentTemp: response.main.temp,
            Description: response.weather[0].description,
            High: response.main.temp_max,
            Low: response.main.temp_min,
            Precipitation: response.main.humidity,
        }
        console.log(weather);
        currentWeatherDisplay();
    })};
    
    $("#submitBtn").on("click", function(event){
        event.preventDefault();
        currentWeather();
        
    });
function currentWeatherDisplay(){
    $("#current").empty();
    $.each (weather, function(key,value) {
        var para = $("<p class='info'></p>");
        $("#current").append(para);
        $("#current").append(para.text = (key+" : "+value));
        console.log(key);
        console.log(value);
        console.log(para);
    });

};