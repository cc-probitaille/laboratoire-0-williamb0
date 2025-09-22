import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDesTest (3 dés, victoire ≤ 10)', () => {
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

  it('brasser() devrait produire toutes les valeurs de 3 à 18 après plusieurs essais', () => {
    const resultats = new Set<number>();
    for (let i = 0; i < 2000; i++) {
      resultats.add(jdd.brasser());
    }
    for (let somme = 3; somme <= 18; somme++) {
      expect(resultats.has(somme)).toBeTrue();
    }
  });

  it('devrait permettre de démarrer un joueur et lancer les dés', () => {
    const joueurJson = jdd.demarrerJeu('Alice');
    const joueurObj = JSON.parse(joueurJson);
    expect(joueurObj.nom).toBe('Alice');
    expect(joueurObj.lancers).toBe(0);

    const resultat = JSON.parse(jdd.jouer('Alice'));
    expect(resultat.nom).toBe('Alice');
    expect(resultat.lancers).toBe(1);
    expect(resultat.somme).toBeGreaterThanOrEqual(3);
    expect(resultat.somme).toBeLessThanOrEqual(18);

    if (resultat.somme <= 10) {
      expect(resultat.reussites).toBe(1);
    } else {
      expect(resultat.reussites).toBe(0);
    }
  });
});
