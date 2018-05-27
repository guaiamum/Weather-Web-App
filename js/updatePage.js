/**
 * Updates the content of the page with 
 * the one set on to the global variables
 */
var updatePage = () => {
    let todayContainer = $('div#today');

    setWeatherClass(todayContainer,Number(today.code));
    todayContainer.find('.temp').html(today.temp + ' °C');
    todayContainer.find('.day').html(today.date.slice(0,3));
    
    forecasts.forEach((e, i)=> {
        let container = $('div#forecast-'+(i+1));
        setWeatherClass(container,Number(e.code));
        let temp = (Number(e.high)+Number(e.low)/2).toFixed(0);
        container.find('.temp').html(temp + ' °C');
        container.find('.day').html(e.day);
    });
}

/**
 * Parses the correct weather code
 * to a class used to select img
 * @param {number} code 
 * @return {string} class
 */
var getWeatherClass = (code) => {
    switch (code) {
        case 1: case 3: case 4: case 37: case 38: case 39:
            return 'storm';
        case 11: case 12: case 40: case 45: case 47:
            return 'rainy';
        case 23:
        case 24:
            return 'breezy';    
        case 26:
            return 'cloudy';
        case 29: case 30:
            return 'less-cloudy';
        case 31:
        case 32:
            return 'sunny';
        default:
            return 'default';
    }
}

/**
 * Finds img in container and replaces the weather
 * assosiated class with the one corresponding to the
 * given code
 * @param {!JQueryObject} container 
 * @param {number} code 
 */
var setWeatherClass = (container, code) => {
    let img = container.find('img');
    let classes = img.attr('class').split(' ');

    img.removeClass(classes[1]).addClass(getWeatherClass(code));

    return container;
}