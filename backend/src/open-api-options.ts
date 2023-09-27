import { config } from '~/config'

export const options = {
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
         * email: "info@email.com",TODO
         */
      }
    },
    servers: [
      {
        url: `http://localhost:${config.API_PORT}`
      }
    ]
  },
  apis: ['./src/resources/documentation/*']
}
