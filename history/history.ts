import { wrap } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it('', () => {
        expect(wrap(3, undefined)).eql(undefined);
    });
});

//-------- IMPLEMENTATION --------

export function wrap(length: number, text: string): string {
    return undefined;
}