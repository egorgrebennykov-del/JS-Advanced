import { assert } from 'chai';
import { mathEnforcer } from '../MathEnforcer.js';

describe('main test', () => {
    it('return undefined', () => {
        assert.equal(mathEnforcer.addFive('abc'), undefined, 'return must be undefined');
        assert.equal(mathEnforcer.sum('abc', 'abc'), undefined, 'return must be undefined');
        assert.equal(mathEnforcer.sum(1, 'abc'), undefined, 'return must be undefined');
        assert.equal(mathEnforcer.sum('abc', 1), undefined, 'return must be undefined');
        assert.equal(mathEnforcer.subtractTen('abc'), undefined, 'return must be undefined');
    });

    it('work with numbers', () => {
        assert.equal(mathEnforcer.addFive(0), 5, 'return must be 5');
        assert.equal(mathEnforcer.sum(5, 5), 10, 'return must be 10');
        assert.equal(mathEnforcer.subtractTen(15), 5, 'return must be 5');
    });

    it('work with negative numbers', () => {
        assert.equal(mathEnforcer.addFive(-5), 0, 'return must be 0');
        assert.equal(mathEnforcer.sum(-5, -5), -10, 'return must be -10');
        assert.equal(mathEnforcer.subtractTen(-10), -20, 'return must be -20');
    });

    it('work with floats', () => {
        assert.closeTo(mathEnforcer.addFive(0.5), 5.5, 0.01, 'return must be 5.5');
        assert.closeTo(mathEnforcer.sum(2.5, 2.5), 5, 0.01, 'return must be 5');
        assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01, 'return must be 0.5');
    });
});