import { galaxyCal } from '../src/galaxyCal.js';
// import { lifeExpStatus } from './../src/galaxyCal.js';


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
        var userTest = new galaxyCal(23)
        expect(userTest.ConvertMercuryAge()).toEqual(95);     
    });

    it('should correctly calculate your age in Venus years', function () {
        var userTest = new galaxyCal(23)
        expect(userTest.ConvertVenusAge()).toEqual(37);
    });

    it('should correctly calculate your age in Mars years', function () {
        var userTest = new galaxyCal(23)
        expect(userTest.ConvertMarsAge()).toEqual(12);
    });

    it('should correctly calculate your age in Jupiter years', function () {
        var userTest = new galaxyCal(23)
        expect(userTest.ConvertJupiterAge()).toEqual(1);
    });

    it("should check their life expectancy limit per each Planet .", function() {
    //  Mercury
        var userTest = new galaxyCal(23)
        expect(userTest.MercuryAgeLimit()).toEqual(670);
    });
    it("should check their life expectancy limit per each Planet .", function() {
    //  Mars
    var userTest = new galaxyCal(23)
    expect(userTest.MarsAgeLimit()).toEqual(36);
    });
    it("should check their life expectancy limit per each Planet .", function() {
    // Jupiter
    var userTest = new galaxyCal(23)
    expect(userTest.JupiterAgeLimit()).toEqual(23);
    });

    it("should check their life expectancy limit per each Planet .", function() {
    //  Venus
    var userTest = new galaxyCal(23)
    expect(userTest.VenusAgeLimit()).toEqual(333);
    });

});
