import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'rdcu-jouer.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});

describe('docs/modeles/rdcu-jouer.puml', () => {
  it('devrait contenir participant "d3:De" as d3 ', () => {
    expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
  });
  it('devrait contenir  participant "d3:De" as d3', () => {
    expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
  });
  it('devrait contenir  c->d3 : brasser() plus GRASP', () => {
    expect(content.includes('c->d3 : brasser()')).toBeTruthy();
  });
  // it('devrait contenir note right : selon Expert;', () => {
  //   expect(content.includes('note right : selon Expert')).toBeTruthy();
  // });
  it('devrait contenir c->d3 : v3 = valeur', () => {
    expect(content.includes('c->d3 : v3 = valeur')).toBeTruthy();
  });
  // it('devrait contenir note right : selon Expert', () => {
  //   expect(content.includes('note right : selon Expert')).toBeTruthy();
  // });
  it('devrait contenir opt v1 + v2 + v3 <= 10', () => {
    expect(content.includes('opt v1 + v2 + v3 <= 10')).toBeTruthy();
  });
});


