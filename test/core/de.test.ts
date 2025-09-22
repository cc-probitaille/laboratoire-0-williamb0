import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDes avec 3 dés', () => {
  let jeu: JeuDeDes;

  beforeEach(() => {
    jeu = new JeuDeDes();
  });

  it('brasser() devrait donner des sommes entre 3 et 18', () => {
    for (let i = 0; i < 1000; i++) {
      const somme = jeu.brasser();
      expect(somme).toBeWithin(3, 19); 
    }
  });

  it('devrait produire toutes les sommes de 3 à 18 après plusieurs lancers', () => {
    const resultats = new Set<number>();
    for (let i = 0; i < 2000; i++) { 
      resultats.add(jeu.brasser());
    }
    for (let somme = 3; somme <= 18; somme++) {
      expect(resultats.has(somme)).toBe(true);
    }
  });
});
