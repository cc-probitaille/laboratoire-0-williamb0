import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';
const nbMotsDirectives = 147;

let content = ""
beforeAll(async () => {
    const filename = path.join('docs', 'experience-parasites-mollassons.md');
    content = readFileSync(filename, 'utf-8');
});

describe('docs/experience-parasites-mollassons.md', () => {
    it(`Doit contenir au moins 300 mots (sans les ${nbMotsDirectives} dans les directives)`, () => {
        expect(wordCount(content)).toBeGreaterThanOrEqual(300 + nbMotsDirectives);
    });
});

// https://stackoverflow.com/a/40385425/1168342
function wordCount(str: string): any {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

