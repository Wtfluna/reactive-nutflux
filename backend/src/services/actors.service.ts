import { Actor } from '~/types/actors'
import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

export class ActorsService {
  findById(id: number): Promise<Actor> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query(
        'SELECT * FROM actors WHERE id = ?',
        [id],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Actor)
          }
        }
      )
    })
  }
}
