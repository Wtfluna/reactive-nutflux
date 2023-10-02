import cors from 'cors'
import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from '~/config'
import { options } from './open-api-options'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'
import { MoviesController } from './controllers/movies.controller'
import { SeriesController } from './controllers/series.controller'
import { GenresController } from './controllers/genres.controller'
import { DirectorsController } from './controllers/directors.controller'
import { ActorsController } from './controllers/actors.controller'
import { RegisterController } from './controllers/register.controller'
// import { RegisterController } from './controllers/register.controller'

// On créé une nouvelle "application" express

const app = express()

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json())

// On dit à Express que l'on souhaite autoriser tous les noms de domaines à faire des requêtes sur notre API.3

app.use(cors())

// Toutes les routes CRUD pour les films seronts préfixées par `/movies` par ex

app.use('/movies', MoviesController)

app.use('/series', SeriesController)

app.use('/genres', GenresController)

app.use('/directors', DirectorsController)

app.use('/actors', ActorsController)

app.use('/register', RegisterController)

/*
 * Swagger (pour voir le contrat de l'API)
 * http://localhost:3000/api-docs/
 */

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(options), { explorer: true })
)

// Pour toutes les autres routes non définies, on retourne une erreur

app.all('*', UnknownRoutesHandler)

// Gestion des erreurs /!\ Cela doit être le dernier `app.use`

app.use(ExceptionsHandler)

// On demande à Express d'ecouter les requêtes sur le port défini dans la config

app.listen(config.API_PORT, () => console.log('Silence, ça tourne.'))

// http://localhost:3000/api-docs/

/*
 * TODO backend:
 *
 * Il faut un endpoint /users en POST pour créer un user (pas dans le swagger actuellement) -> INSERT INTO users
 * On a besoin du username, du account_id (que le front a stocké quand il a login) et de l'avatar (pas obligé l'avatar)
 * ATTENTION, ici quand on crée un user, on a dit qu'on créait aussi 3 lists pour ce user (INSERT INTO lists), avec les noms qu'on veut (Déjà Vu...)
 * --> Sur la page ChooseProfile, on a un gros + pour créer (si pas déjà 3 mais pas obligé de gérer ça maintenant)
 *
 * Faire le /users/account/:account_id -> index, UserController, UserService --> SELECT FROM users WHERE account_id blabla)
 * --> Si on a ça, on peut faire marcher la page ChooseProfile, quand on clique sur un des users (BABI), on va encore une fois stocker user_id cette fois
 * --> Là en mémoire (cookie, storage...) le front il a account_id = 1 (par ex) et user_id = 2 (par ex)
 *
 * Faire marcher le /lists/user/:user_id -> SELECT FROM lists WHERE user_id blabla)
 * --> Là on peut afficher la page d'accueil du user qui affiche les 3 listes et pout_r chaque liste on va devoir appeler le endpoint d'après
 *
 * Faire marcher le /movies/lists/:list_id -> SELECT FROM movies avec une table pivot movies_lists je crois WHERE list_id blabla
 * --> Là on peut afficher un truc du style
 *  DEJA VU
 *    AVATAR - MARS ATTACK - ... chaque film étant une petite vignette jolie
 * Quand on clique sur une vignette, on affiche le film soit dans sa page soit embedded dans le page avec un truc stylé mais on sait pas comment on fait
 *
 * Pareil les series mais vaut mieux faire marcher tous les films avant, series c'est copier/coller des films
 *
 * On a besoin d'un nouveau truc qu'on découvre, un POST sur /lists avec list_id, movie_id pour ajouter le film dans une liste quand on clique sur un bouton
 * --> INSERT INTO la table pivot
 * Idéalement il faudrait aussi un endpoint DELETE sur /lists avec list_id, movie_id pour supprimer le film de la liste
 * --> DELETE FROM la table pivot
 */
