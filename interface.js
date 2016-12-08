$( document ).ready(function(){

  var thermostat = new Thermostat();
  $("#powersaving-on-or-off").text("ON");
  $( "#temperature" ).text(thermostat.currentTemperature);
  $("#energy-report").text(thermostat.energyReport());

  $( "#temperature-up" ).click(function() {
    thermostat.up(1);
    updateTemperature();
    updateEnergySaving();
  });

  $( "#temperature-down" ).click(function(){
    thermostat.down(1);
    updateTemperature();
    updateEnergySaving();
  });

  $( "#temperature-reset" ).click(function(){
    thermostat.resetTemperature();
    updateTemperature();
    updateEnergySaving();
  });

  $( "#powersaving-toggle" ).click(function(){
    thermostat.powerSaverMode();
      if (thermostat.isInPowerSaverMode) {
        $("#powersaving-on-or-off").text("ON");
      } else {
        $("#powersaving-on-or-off").text("OFF");
      }
      updateTemperature();
    });

    updateTemperature = function(){
      $( "#temperature" ).text(thermostat.currentTemperature);
    };

    updateEnergySaving = function() {
      $("#energy-report").text(thermostat.energyReport());
      $("#energy-report").attr('class', thermostat.energyReport());
    };

    $("button").click(function(){
        var city = $("#weather-location").val();
        console.log(city)
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=331e0d64b2f4fa7472038f84e50c5783',function(data) {
          $("#weather-summary").text(data.weather[0].description)
          $("#weather-temperature").text(data.main.temp)
          $("#weather-humidity").text(data.main.humidity)
          $("#location").text(data.name)
        });
    });

});
