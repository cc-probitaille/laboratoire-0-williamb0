import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'dss-redemarrerJeu.puml');
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/dss-redemarrerJeu.puml', () => {
  it("devrait contenir Joueur", () => {
    expect(content.includes("Joueur")).toBeTruthy();
  });

  it("devrait contenir Système", () => {
    expect(content.includes("Système")).toBeTruthy();
  });

  it("devrait contenir redemarrerJeu()", () => {
    expect(content.includes("redémarrerJeu()")).toBeTruthy();
  });

});


