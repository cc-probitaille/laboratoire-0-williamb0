// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import app from '../../src/app';
import request from 'supertest';

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  beforeAll(async () => {
    await request(app).post('/api/v1/joueurs').send({ nom: 'Alice' });
    await request(app).post('/api/v1/joueurs').send({ nom: 'Bob' });
  });

    it('devrait redémarrer le jeu avec succès (statut 200 et réponse JSON)', async () => {
    const response = await request(app).get('/api/v1/jeu/redemarrerJeu');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('devrait supprimer toutes les instances de Joueur en cours (postcondition)', async () => {
    const joueursResponse = await request(app).get('/api/v1/joueurs');

    expect(joueursResponse.status).toBe(200);
    expect(joueursResponse.body).toBeArrayOfSize(0);
  });
});


describe('redemarrerJeu.test.ts', () => {
  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});
