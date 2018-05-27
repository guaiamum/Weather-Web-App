var autocomplete;

var initMap = () => {
    let input = document.getElementById('city');
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', getPlace);
}

var getPlace = () => {
    let place = autocomplete.getPlace();
    getForecast(place.formatted_address);
}