import mysql, { RowDataPacket } from 'mysql2/promise'
import * as dotenv from 'dotenv'
import { List } from '~/types/lists'
import { MoviesService } from './movies.service'
import { SeriesService } from './series.service'

dotenv.config()

export class ListsService {
  async findListsByUserId(userId: number): Promise<List[]> {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE
    })

    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT * FROM lists WHERE user_id = ?',
      [userId]
    )
    const lists: List[] = await Promise.all(
      rows.map(async (row) => {
        return {
          name: row['name'],
          movies: await new MoviesService().findByListId(row['id']),
          series: await new SeriesService().findByListId(row['id'])
        }
      })
    )
    return lists
  }
}
