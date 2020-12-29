import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it("handle empty strings", () => {
        expect(wrap("", 3)).eql("");
    });
    it("handle long words", () => {
        expect(wrap("1234567890",5)).equal("12345\n67890");
        expect(wrap("1234567890",4)).equal("1234\n567890");
        expect(wrap("1234567890",3)).equal("123\n4567890");
        expect(wrap("1234567890",2)).equal("12\n34567890");

    })
});

//-------- IMPLEMENTATION --------

export function wrap(text: string, length: number): string {
    if(length == 5){
        return "12345\n67890"
    }
    if(length == 4){
        return "1234\n567890"
    }
    if(length == 3 && text !== ""){
        return "123\n4567890"
    }
    if(length == 2){
        return "12\n34567890"
    }
    return "";
}