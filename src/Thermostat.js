var Thermostat = function() {
  this.currentTemperature = DEFAULT_TEMP;
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.up = function(number) {
   this.currentTemperature += number;
   if(this.isInPowerSaverMode && this.currentTemperature > 25){
     this.currentTemperature = 25;
     return this.currentTemperature;
   } else if(this.isInPowerSaverMode === false && this.currentTemperature > 32){
      this.currentTemperature = 32;
      return this.currentTemperature;
    } else {
   return this.currentTemperature;
 }
};

Thermostat.prototype.down = function(number) {
  this.currentTemperature -= number;
  if(this.currentTemperature < 10) {
    this.currentTemperature = 10;
    return this.currentTemperature;
  } else {
  return this.currentTemperature;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.currentTemperature = this.DEFAULT_TEMP;
  return this.currentTemperature;
};

Thermostat.prototype.energyReport = function() {
  if(this.currentTemperature < 18){
    return 'low-usage';
  } else if(this.currentTemperature > 24 ) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};

Thermostat.prototype.powerSaverMode = function() {
  if(this.isInPowerSaverMode){
    return this.isInPowerSaverMode = false;
  } else if (this.currentTemperature > 25 && this.isInPowerSaverMode === false) {
      return this.currentTemperature = 25;
      return this.isInPowerSaverMode = true;
  } else {
    return this.isInPowerSaverMode = true;
  }
};
const DEFAULT_TEMP = 20;
