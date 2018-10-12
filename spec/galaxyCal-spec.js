import { galaxyCal } from './../src/galaxyCal.js';
import { lifeExpStatus } from './../src/galaxyCalc.js';


describe('galaxyCal', function () {   
  let userAge;
  let userAge2;

  beforeEach(function() {
    userAge = new galaxyCal(23, lifeExpStatus.healthy);
    userAge2 = new galaxyCal(60, lifeExpStatus.unhealthy);
  });

    it('should test that the age and status are valid', function () {
        expect(userAge.lifeExpStatus).toEqual(healthy);
        expect(userAge2.lifeExpStatus).toEqual(unhealthy);
    });

    it('should correctly calculate your age in Mercury years', function () {
        expect(userAge.mercuryAge).toEqual(userAge.age / 0.24.toFixed(2));
        expect(userAge2.mercuryAge).toEqual(userAge.age / 0.24.toFixed(2));
    });

    it('should correctly calculate your age in Venus years', function () {
        expect(userAge.marsAge).toEqual(userAge.age / 0.62.toFixed(2));
        expect(userAge2.marsAge).toEqual(userAge.age / 0.62.toFixed(2));
    });

    it('should correctly calculate your age in Mars years', function () {
        expect(userAge.venusAge).toEqual(userAge.age / 1.88.toFixed(2));
        expect(userAge2.venusAge).toEqual(userAge.age / 1.88.toFixed(2));
    });

    it('should correctly calculate your age in Jupiter years', function () {
        expect(userAge.jupiterAge).toEqual(userAge.age / 11.86.toFixed(2));
        expect(userAge2.jupiterAge).toEqual(userAge.age / 11.86.toFixed(2));
    });

    it("should check their life expectancy limit per each Planet .", function() {
    //  Mercury
        expect(userAge.MercuryLifeExp).toEqual(40 / 0.24 - userAge.mercuryAge.toFixed(2));
        expect(userAge2.MercuryLifeExp).toEqual(80 / 0.24 - userAge2.mercuryAge.toFixed(2));
    //  Mars
        expect(userAge.MarsLifeExp).toEqual(40 / 0.62 - userAge.marsAge.toFixed(2));
        expect(userAge2.MarsLifeExp).toEqual(80 / 0.62 - userAge2.marsAge.toFixed(2));
    // Jupiter
        expect(userAge.JupiterLifeExp).toEqual(40 / 1.88 - userAge.jupiterAge.toFixed(2));
        expect(userAge2.JupiterLifeExp).toEqual(80 / 1.88 - userAge2.jupiterAge.toFixed(2));
    //  Venus
        expect(userAge.JupiterLifeExp).toEqual(40 / 11.86- userAge.venusAge.toFixed(2));
        expect(userAge2.JupiterLifeExp).toEqual(80 / 11.86- userAge2.venusAge2.toFixed(2));
    });
22
    it("should return the number of years they have lived past the life expectancy", function() {
        expect(userAge.MercuryLimit).toEqual(userAge.MercuryLifeExp * (-1));
        expect(userAge.MarsLimit).toEqual(userAge.MarsLifeExp * (-1));
        expect(userAge.JupiterLimit).toEqual(userAge.JupiterLifeExp * (-1));
        expect(userAge.VenusLimit).toEqual(userAge.VenusLifeExp * (-1));
    });

});
