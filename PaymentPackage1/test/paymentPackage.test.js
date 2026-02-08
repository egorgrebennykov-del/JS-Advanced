import { expect } from 'chai';
import { PaymentPackage } from '../paymentPackage.js';

describe('Main Test', () => 
{
    it('Class Validation', () => {
        const validation = new PaymentPackage('abc', 1000);
        expect(validation.name).to.equal('abc');
        expect(validation.value).to.equal(1000);
        expect(validation.VAT).to.equal(20);
        expect(validation.active).to.equal(true);
    });

    it('should return an error if name is uncorrect', () => {
        expect(() => new PaymentPackage('', 1000)).to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage(12, 1000)).to.throw(Error, 'Name must be a non-empty string');
    });

    it('should return an error if value is uncorrect', () => {
        expect(() => new PaymentPackage('abc', 'abc')).to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('abc', -5)).to.throw(Error, 'Value must be a non-negative number');
    });

    it('should return an error if VAT is uncorrect', () => {
        const vatCheck = new PaymentPackage('abc', 100);
        vatCheck.VAT = 30;
        expect(vatCheck.VAT).to.equal(30);
        expect(() => {vatCheck.VAT = -5}).to.throw(Error, 'VAT must be a non-negative number');
    });

    it('should return an error if active is uncorrect', () => {
        const activeCheck = new PaymentPackage('abc', 1000);
        activeCheck.active = false;
        expect(activeCheck.active).to.equal(false);
        expect(() => {activeCheck.active = 'abc'}).to.throw(Error, 'Active status must be a boolean');
    });

    it('should return package information', () => {
        const checkInfo = new PaymentPackage("HR", 100);
        expect(checkInfo.toString()).to.equal(
            "Package: HR\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120"
        );

        checkInfo.active = false;

        expect(checkInfo.toString()).to.equal(
            "Package: HR (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120"
        );
    });
});