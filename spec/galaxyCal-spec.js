import { galaxyCal } from './../src/galaxyCal.js';

describe('galaxyCal', function()
{
    var reusablegalaxyCal;
    beforeEach(function(){
        reusablegalaxyCal = new galaxyCal(10,05,1995);
    });

    it('should test that the month, day and year is valid', function()
    {
        var galaxyCal = new galaxyCal(10,05,1995);
        expect(galaxyCal.month).toEqual(10);
        expect(galaxyCal.day).toEqual(05);
        expect(galaxyCal.year).toEqual(1995);

    });

    it('should correctly calculate your age in Mercury years', function() {
        expect(reusablegalaxyCal.checkType()).toEqual('My Age in Mercury is 95.5 years');
    });
    
    it('should correctly calculate your age in Venus years', function() {
        expect(reusablegalaxyCal.checkType()).toEqual('My Age in Venus is 37.4 years');
    });

    it('should correctly calculate your age in Mars years', function() {
        expect(reusablegalaxyCal.checkType()).toEqual('My Age in Mars is 12.2 years');
    });

    it('should correctly calculate your age in Jupiter years', function() {
        expect(reusablegalaxyCal.checkType()).toEqual('My Age in Jupiter is 1.94 years');
    });

});
