import { User } from '~/types/users'
import mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'

dotenv.config()

export class UserService {
  async createNewUser(
    username: string,
    accountId: number,
    avatar: string
  ): Promise<boolean> {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE
    })
    await connection.query(
      'INSERT INTO users (username, account_id, avatar) VALUES (?, ?, ?)',
      [username, accountId, avatar]
    )
    return true
  }

  async findUsersByAccountId(accountId: number): Promise<User[]> {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE
    })
    const [users] = await connection.query<User[]>(
      'SELECT * FROM users WHERE account_id = ?',
      [accountId]
    )
    return users
  }
}
