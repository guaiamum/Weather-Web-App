var updatePage = () => {
    todayContainer = $('div#today');
    todayContainer.find('.temp').html(today.temp + ' °C');
    
}