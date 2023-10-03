import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

export class UserService {
  async createNewUser(
    username: string,
    account_id: number,
    avatar: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })
    })
  }
}
