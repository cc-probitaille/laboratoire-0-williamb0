import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'dcu.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});

describe('docs/modeles/dcu.puml', () => {
  it("devrait contenir (Redémarrer) as R #powderblue", () => {
    expect(content.includes("(Redémarrer) as R #powderblue")).toBeTruthy();
  });

  it("devrait contenir J -- R", () => {
    expect(content.includes("J -- R")).toBeTruthy();
  });

});
