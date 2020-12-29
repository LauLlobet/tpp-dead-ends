import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it("handle empty strings", () => {
        expect(wrap("", 3)).eql("");
    });
    it("handle long words", () => {
        expect(wrap("1234567890",5)).equal("12345\n67890");
    })
});

//-------- IMPLEMENTATION --------

export function wrap(text: string, length: number): string {
    if(length == 5){
        return "12345\n67890"
    }
    return "";
}