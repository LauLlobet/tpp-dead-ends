import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it('', () => {
        expect(wrap(3, undefined)).eql("");
        expect(wrap(3, "")).eql(""); //nil -> constant
        expect(wrap(10, "word")).eql("word"); //constant -> constant+
        expect(wrap(4, "word word")).eql("word\nword"); //constant -> constant+
        expect(wrap(4, "word word word")).eql("word\nword\nword"); //constant -> constant+
    });
});



//-------- IMPLEMENTATION --------

export function wrap(length: number, text: string): string {
    if(text == undefined){ // unconditional -> conditional
        return ""; // nil -> constant
    }
    return text.replace(' ','\n') // statemet -> statements
}