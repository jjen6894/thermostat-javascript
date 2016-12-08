describe("Thermostat", function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat()
    });

    describe("thermostat starts with:", function() {
      it("a default temperature of 20 degrees", function(){
        expect(thermostat.currentTemperature).toEqual(20)
      });
    });

    describe("thermostat can change temperature:", function(){
      it("increases temperature by 1", function(){
        expect(thermostat.up(1)).toEqual(21)
      });
      it("increases temperature by 5", function(){
        expect(thermostat.up(5)).toEqual(25)
      });
      it("decreases temperature by 1", function(){
        expect(thermostat.down(1)).toEqual(19)
      });
      it("decreases temperature by 5", function(){
        expect(thermostat.down(5)).toEqual(15)
      });
    });

    describe("thermostat cannot go past both extremes:", function() {
      it("will stop decreasing temperature when it reaches 10", function() {
        expect(thermostat.down(11)).toEqual(10)
      });
    });

    describe('when power saver mode is on', function() {
      it("should have a maximum temperature of 25 degrees", function() {
        expect(thermostat.up(6)).toEqual(25)
      });
    });
    describe("when power saver mode is off",function(){

      it("should have a maximum temperature of 32",function(){
        thermostat.isInPowerSaverMode = false
        expect(thermostat.up(13)).toEqual(32)
        });
    });

    describe("switching power saver mode",function(){

      it("to false",function(){
        thermostat.powerSaverMode()
        expect(thermostat.isInPowerSaverMode).toEqual(false)
      });

      it("to false, then back to try",function(){
        thermostat.powerSaverMode()
        thermostat.powerSaverMode()
        expect(thermostat.isInPowerSaverMode).toEqual(true)
      });
    });

    describe("hit a reset button:",function(){
      it("that resets temperature back to 20",function(){
        expect(thermostat.reset()).toEqual(this.DEFAULT_TEMP)
      });
    });

    describe("should return current energy use report", function() {
      it("should return 'low-usage' if current temperature if below 18", function() {
        thermostat.down(3);
        expect(thermostat.energyReport()).toEqual('low-usage')
      });

      it("should return 'medium-usage' if current temperature is between 18 and 24", function() {
        expect(thermostat.energyReport()).toEqual('medium-usage')
      });

      it("should return 'high-usage' if current temperature is above 24", function() {
        thermostat.up(5);
        expect(thermostat.energyReport()).toEqual('high-usage')
      });
    });

});
