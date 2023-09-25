import { Serie } from '~/types/series'
import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

export class SeriesService {
  findAll(): Promise<Serie[]> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query('SELECT * FROM series', (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res as Serie[])
        }
      })
    })
  }
  findById(id: number): Promise<Serie> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query(
        'SELECT * FROM series WHERE id = ?',
        [id],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Serie)
          }
        }
      )
    })
  }
  findByGenreId(genreId: number): Promise<Serie> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })
      connection.query(
        'SELECT * FROM series WHERE genre_id = ?',
        [genreId],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Serie)
          }
        }
      )
    })
  }
}
