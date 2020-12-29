import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it("handle empty strings", () => {
        expect(wrap("", 3)).eql("");
    });
});

//-------- IMPLEMENTATION --------

export function wrap(text: string, length: number): string {
    return "";
}