describe('QA_challenge', function () {


    it('Checking Holiday', () => {

        let date1 = isHolidayDay('05/30/2022');
        expect(date1).toBe.true;

    })

    it('Checking Weekendday', () => {

        let date2 = isWeekendDay('05/15/2022');
        expect(date2).toBe.true;

    })


    it('Checking Businessday', () => {

        let date3 = isBusinessDay('05/08/2022');
        expect(date3).toBe.true;

    })


})