import {assert} from 'chai';
import { isOddOrEven } from '../EvenOrOdd.js';

describe('main test', () => 
{
    it('test with non string value', () => {
        assert.equal(isOddOrEven(123), undefined, 'result must be undefined');
    });

    it('test with even', () => {
        assert.equal(isOddOrEven('Hi'), 'even', 'result must be even');
    });

    it('test with odd', () => {
        assert.equal(isOddOrEven('Hello'), 'odd', 'result must be odd');
    });
});