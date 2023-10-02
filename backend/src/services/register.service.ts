import mysql from 'mysql2'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

export class RegisterService {
  async createNewAccount(
    username: string,
    email: string,
    password: string
  ): Promise<boolean> {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: process.env.DATABASE_SERVER,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
      })

      connection.query(
        'INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(true)
          }
        }
      )
    })
  }
}
