import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

const testNom1 = 'Alice';
const testNom2 = 'Bob';

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
  });

  it('devrait redémarrer le jeu avec succès (statut 200 et réponse JSON)', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('devrait supprimer toutes les instances de Joueur en cours (postcondition)', async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it('devrait retourner 404 si on joue après redemarrerJeu', async () => {
    await request.get('/api/v1/jeu/redemarrerJeu');

    const response = await request.get('/api/v1/jeu/jouer/' + testNom1);
    expect(response.status).toBe(404);
    expect(response.body.error).toInclude("n'existe pas");
    expect(response.body.error).toInclude(testNom1);
  });

});
