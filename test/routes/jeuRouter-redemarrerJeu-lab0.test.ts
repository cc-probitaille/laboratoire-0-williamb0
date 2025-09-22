import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

const testNom1 = 'Alice';
const testNom2 = 'Bob';

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  beforeAll(async () => {
    // créer deux joueurs avant de tester le redémarrage
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
  });

  it('devrait redémarrer le jeu avec succès (statut 200 et réponse JSON)', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('devrait supprimer toutes les instances de Joueur en cours (postcondition)', async () => {
    // accéder directement au contrôleur pour vérifier la postcondition
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

});
