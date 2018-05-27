var autocomplete;

var initMap = () => {
    let input = document.getElementById('city');
    let options = {
        types: ['(cities)'],
    };

    autocomplete = new google.maps.places.Autocomplete(input,options);
    autocomplete.addListener('place_changed', getPlace);

    firstRun(input);
}

var getPlace = () => {
    let place = autocomplete.getPlace();
    getForecast(place.formatted_address);
}

var firstRun = (input) => {
    let place = "Salvador, Bahia, Brasil";
    $(input).val(place);
    getForecast(place);
}