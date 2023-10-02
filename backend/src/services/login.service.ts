import mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Account } from '~/types/accounts'

dotenv.config()
// Aller chercher le mdp/email dans la DB et les comparer à ce qu'à entré l'utilisateur

export class LoginService {
  async connectToAccount(
    email: string,
    password: string
  ): Promise<string | null> {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE
    })

    const [accounts] = await connection.query<Account[]>(
      'SELECT * FROM accounts WHERE email = ?',
      [email]
    )

    // Switch après avoir comparé la password hâché et le password entré par le user
    switch (accounts.length) {
      case 0:
        return null
      case 1: {
        const hashedPassword = accounts[0].password
        const comparison = await bcrypt.compare(password, hashedPassword)
        if (comparison) {
          return accounts[0].id.toString()
        } else {
          return null
        }
      }
      default:
        throw new Error('Multiple accounts found with the same email.')
    }
  }
}
