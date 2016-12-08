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

});
