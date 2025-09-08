
import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'rdcu-redemarrerJeu.puml')
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/rdcu-redemarrerJeu.puml', () => {
  it("devrait contenir :JeuDeDes", () => {
    expect(content.includes(":JeuDeDes")).toBeTruthy();
  });

  it("devrait contenir joueurs:", () => {
    expect(content.includes("joueurs:")).toBeTruthy();
  });

  it("devrait contenir Map<String, Joueur>", () => {
    expect(content.includes("Map<String, Joueur>")).toBeTruthy();
  });

  it("devrait contenir redemarrerJeu()", () => {
    expect(content.includes("redemarrerJeu()")).toBeTruthy();
  });
});


