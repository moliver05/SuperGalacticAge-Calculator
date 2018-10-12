import { galaxyCal } from './../src/galaxyCal.js';
import { lifeExpStatus } from './../src/galaxyCalc.js';


describe('galaxyCal', function () 
{
    var reusablegalaxyCal;

    beforeEach(function () {
        reusablegalaxyCal = new galaxyCal(23, healthy);
    });

    it('should test that the age and status are valid', function () {
        var galaxyCal = new galaxyCal(23, healthy);
        expect(galaxyCal.age).toEqual(23);
        expect(galaxyCal.status).toEqual(healthy);

    });

    it('should correctly calculate your age in Mercury years', function () {
        expect(galaxyCal.checkType()).toEqual('My Age in Mercury is 95.5 years');
    });

    it('should correctly calculate your age in Venus years', function () {
        expect(galaxyCal.checkType()).toEqual('My Age in Venus is 37.4 years');
    });

    it('should correctly calculate your age in Mars years', function () {
        expect(galaxyCal.checkType()).toEqual('My Age in Mars is 12.2 years');
    });

    it('should correctly calculate your age in Jupiter years', function () {
        expect(galaxyCal.checkType()).toEqual('My Age in Jupiter is 1.94 years');
    });

});
