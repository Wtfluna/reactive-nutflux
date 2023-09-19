import cors from 'cors'
import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from '~/config'
import { PetsController } from '~/resources/pets/pets.controller'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'

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
 * Toutes les routes CRUD pour les animaux seronts préfixées par `/pets`
 */
app.use('/pets', PetsController)

/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => res.send('🏠'))

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Nutflux API',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Nutflux'
        /*
         * url: "https://logrocket.com",
         * email: "info@email.com",
         */
      }
    },
    servers: [
      {
        url: `http://localhost:${config.API_PORT}`
      }
    ]
  },
  apis: ['./src/resources/.documentation/*.ts']
}

const specs = swaggerJsdoc(options)

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
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

// http://localhost:3000/api-docs/
