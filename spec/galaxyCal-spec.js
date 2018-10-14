import { galaxyCal } from './../src/galaxyCal.js';
import { lifeExpStatus } from './../src/galaxyCalc.js';


describe('galaxyCal', function () {   
  let userTest;
  let userTest2;

  beforeEach(function() {
    userTest = new galaxyCal(23);
    userTest2 = new galaxyCal(60);
  });

    it('should test that the age are valid', function () {
        expect(userTest.age).toEqual(23);
        expect(userTest2.age).toEqual(60);
    });

    it('should correctly calculate your age in Mercury years', function () {
        expect(userTest.mercuryAge).toEqual(userTest.age / 0.24.toFixed(2));
        expect(userTest2.mercuryAge).toEqual(userTest2.age / 0.24.toFixed(2));
    });

    it('should correctly calculate your age in Venus years', function () {
        expect(userTest.marsAge).toEqual(userTest.age / 0.62.toFixed(2));
        expect(userTest2.marsAge).toEqual(userTest2.age / 0.62.toFixed(2));
    });

    it('should correctly calculate your age in Mars years', function () {
        expect(userTest.venusAge).toEqual(userTest.age / 1.88.toFixed(2));
        expect(userTest2.venusAge).toEqual(userTest2.age / 1.88.toFixed(2));
    });

    it('should correctly calculate your age in Jupiter years', function () {
        expect(userTest.jupiterAge).toEqual(userTest.age / 11.86.toFixed(2));
        expect(userTest2.jupiterAge).toEqual(userTest2.age / 11.86.toFixed(2));
    });

    // it("should check their life expectancy limit per each Planet .", function() {
    // //  Mercury
    //     expect(userTest.MercuryAgeLimit).toEqual(this.age / 0.24 - userTest.mercuryAge.toFixed(2));
    //     expect(userTest2.MercuryAgeLimit).toEqual(this.age / 0.24 - userTest2.mercuryAge.toFixed(2));
    // //  Mars
    //     expect(userTest.MarsAgeLimit).toEqual(/ 0.62 - userTest.marsAge.toFixed(2));
    //     expect(userTest2.MarsAgeLimit).toEqual(80 / 0.62 - userTest2.marsAge.toFixed(2));
    // // Jupiter
    //     expect(userTest.JupiterAgeLimit).toEqual(/ 1.88 - userTest.jupiterAge.toFixed(2));
    //     expect(userTest2.JupiterAgeLimit).toEqual(80 / 1.88 - userTest2.jupiterAge.toFixed(2));
    // //  Venus
    //     expect(userTest.JupiterAgeLimit).toEqual(/ 11.86- userTest.venusAge.toFixed(2));
    //     expect(userTest2.JupiterAgeLimit).toEqual(80 / 11.86- userTest2.venusAge2.toFixed(2));
    // });
22
});
