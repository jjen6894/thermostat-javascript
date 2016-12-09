'use strict';

var Thermostat = function() {
  this.degrees = 20;
  this.powerSaving = true;
  this.usage = "medium-usage";
};

Thermostat.prototype.increase = function() {
  this.checkMaxMin();
  this.degrees += 1;
  this.setUsage();
};

Thermostat.prototype.decrease = function() {
  this.checkMaxMin();
  this.degrees -= 1;
  this.setUsage();
};

Thermostat.prototype.reset = function(){
  this.degrees = 20;
};

Thermostat.prototype.setPowerSaving = function(boolean) {
  this.powerSaving = boolean;
}
Thermostat.prototype.changeTemp = function(value) {
  if(value > 10 && value < 32){
    return this.degrees = value
  }
}

Thermostat.prototype.checkMaxMin = function() {
  const MAXIMUM_TEMPERATURE = 33;
  const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
  const MINIMUM_TEMPERATURE = 9;
  if (this.degrees >= POWER_SAVING_MAXIMUM_TEMPERATURE && this.powerSaving === true) {
    throw new Error("Power saving on. Maximum temperature reached.");
  }
  if (this.degrees > MAXIMUM_TEMPERATURE && this.powerSaving === false) {
    throw new Error("Power saving off. Maximum temperature reached.")
  }
  if (this.degrees < MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  }
};

Thermostat.prototype.setUsage = function(){
  if (this.degrees > 25) {
    this.usage = "high-usage";
  } else if (this.degrees < 18) {
    this.usage = "low-usage";
  } else {
    this.usage = "medium-usage";
  }
};
