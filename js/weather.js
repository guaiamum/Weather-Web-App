// var key = "dj0yJmk9OUNsUTlVbXl3RTJRJmQ9WVdrOU1rSjVXRXA2TkRJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD02Yg--";
var today;
var forecasts;
var getForecast = (city) => {
    var searchtext = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
    $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
        data: {text: city}
    }).then((data) => {
        today = data.query.results.channel.item.condition;
        forecasts = data.query.results.channel.item.forecast.slice(1,5);
        updatePage();//{today:today, forecasts})
    });
}