$( document ).ready(function(){
  var thermostat = new Thermostat();

  var updateDisplay = function() {
    $('#room-temperature').text(thermostat.degrees + "c");
    $('#display').attr('class', thermostat.usage);
  };

  var showActive = function(button) {
    $(button).addClass('blue');
  };

  var clearActive = function(button) {
    $(button).removeClass('blue');
  };

  var displayWeather = function(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#city-temperature').text(data.name + ": " + data.main.temp + "c")
    })
  };

  showActive('#power-saving-on');
  displayWeather('london');
  updateDisplay();

  $('#temp-up').click(function() {
    thermostat.increase();
    updateDisplay();
  });

  $('#temp-down').click(function() {
    thermostat.decrease();
    updateDisplay();
  });

  $('#power-saving-on').click(function() {
    thermostat.setPowerSaving(true);
    showActive('#power-saving-on');
    clearActive('#power-saving-off')
  });

  $('#power-saving-off').click(function() {
    thermostat.setPowerSaving(false);
    showActive('#power-saving-off');
    clearActive('#power-saving-on');
  });

  $('#reset').click(function(){
    thermostat.reset();
    updateDisplay();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });
});
