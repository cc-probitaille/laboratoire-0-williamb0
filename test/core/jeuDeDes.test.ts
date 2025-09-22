import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDesTest (3 dés)', () => {
  let jdd: JeuDeDes;

  beforeEach(() => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, () => {
    expect(jdd.joueurs).toEqual("[]");
  });

  it('brasser() devrait retourner une valeur entre 3 et 18', () => {
    for (let i = 0; i < 200; i++) {
      expect(jdd.brasser()).toBeWithin(3, 19);
    }
  });

  it('brasser() devrait produire toutes les valeurs de 3 à 18 après suffisamment de lancers', () => {
    const resultats = new Set<number>();
    for (let i = 0; i < 2000; i++) { // beaucoup d'essais pour les valeurs rares
      resultats.add(jdd.brasser());
    }
    for (let somme = 3; somme <= 18; somme++) {
      expect(resultats.has(somme)).toBeTrue();
    }
    // valeurs impossibles
    expect(resultats.has(2)).toBeFalse();
    expect(resultats.has(19)).toBeFalse();
  });
});
