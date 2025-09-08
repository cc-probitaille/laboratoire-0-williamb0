import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

const indexPugFilename = path.join('views', 'index.pug')
const contentIndex = readFileSync(indexPugFilename, 'utf-8');
const classementPugFilename = path.join('views', 'stats.pug')
const contentClassement = readFileSync(classementPugFilename, 'utf-8');

describe('views/index.pug', () => {
  it("devrait contenir button#redemarrer Redémarrer", () => {
    expect(contentIndex.includes("button#redemarrer Redémarrer")).toBeTruthy();
  });

});

describe('views/stats.pug', () => {

  it("devrait ne pas avoir la colonne ratio en commentaire ", () => {
    expect(contentClassement.includes(`//- td(style="text-align: right; font-family: monospace") #{joueur.ratio.toFixed(8)}`)).toBeFalsy();
    expect(contentClassement.includes(`  td(style="text-align: right; font-family: monospace") #{joueur.ratio.toFixed(8)}`)).toBeTruthy();
  });

});
