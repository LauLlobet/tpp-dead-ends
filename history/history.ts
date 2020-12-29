import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it('', () => {
        expect(wrap(3, undefined)).eql("");
        expect(wrap(3, "")).eql(""); //nil -> constant
        expect(wrap(10, "word")).eql("word"); //constant -> constant+
    });
});



//-------- IMPLEMENTATION --------

export function wrap(length: number, text: string): string {
    return ""; // nil -> constant
}