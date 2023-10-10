import { Movie } from '~/types/movies'
import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

export class MoviesService {
  findAll(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query('SELECT * FROM movies', (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res as Movie[])
        }
      })
    })
  }

  findById(id: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query(
        'SELECT * FROM movies WHERE id = ?',
        [id],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Movie)
          }
        }
      )
    })
  }

  findByGenreId(genreId: number): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })
      connection.query(
        'SELECT * FROM movies WHERE genre_id = ?',
        [genreId],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Movie[])
          }
        }
      )
    })
  }
  findByListId(listId: number): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })
      connection.query(
        `
        SELECT * FROM movies 
        LEFT JOIN movies_lists ON movies_lists.movie_id = movies.id
        WHERE list_id = ?
        `,
        [listId],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res as unknown as Movie[])
          }
        }
      )
    })
  }
}

// Le service contient la logique métier, cad dans notre cas, aller chercher les données dans la DB
