$( document ).ready(function(){

    var thermostat = new Thermostat();
    $("#powersaving-on-or-off").text("ON");
    $( "#temperature" ).text(thermostat.currentTemperature);
    $( "#temperature-up" ).click(function() {
      thermostat.up(1);
      updateTemperature();
    });
    $( "#temperature-down" ).click(function(){
      thermostat.down(1);
      updateTemperature();
    });
    $( "#temperature-reset" ).click(function(){
      thermostat.resetTemperature();
      updateTemperature();
    });
    $( "#powersaving-toggle" ).click(function(){
      thermostat.powerSaverMode();
      console.log(thermostat)
      console.log(this.isInPowerSaverMode)
      if (thermostat.isInPowerSaverMode) {
        console.log("jack")
        $("#powersaving-on-or-off").text("ON");
      } else {
        console.log("leke")
        $("#powersaving-on-or-off").text("OFF");
      }
    });
    updateTemperature = function(){
      $( "#temperature" ).text(thermostat.currentTemperature);
    };
});
