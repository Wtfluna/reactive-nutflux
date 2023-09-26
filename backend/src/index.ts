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
// import { RegisterController } from './controllers/register.controller'

/**
 * On créé une nouvelle "application" express
 */
const app = express()

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json())

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors())

/**
 * Toutes les routes CRUD pour les films seronts préfixées par `/movies` par ex
 */
app.use('/movies', MoviesController)

app.use('/series', SeriesController)

app.use('/genres', GenresController)

app.use('/directors', DirectorsController)

app.use('/actors', ActorsController)

// app.use('/register', RegisterController)

/**
 * Swagger (pour voir le contrat de l'API)
 * http://localhost:3000/api-docs/
 */
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(options), { explorer: true })
)

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler)

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(ExceptionsHandler)

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(config.API_PORT, () => console.log('Silence, ça tourne.'))
