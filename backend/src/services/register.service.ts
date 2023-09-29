/* eslint-disable multiline-comment-style */
/*
import mysql from 'mysql2'
eslint-disable-next-line multiline-comment-style
import * as dotenv from 'dotenv'
import { Account } from '~/types/accounts'
import { rejects } from 'assert'
dotenv.config()
*/

const bcrypt = require('bcrypt');
export class RegisterService {
  db_connection: any;

  constructor() {
    this.db_connection = mysql.createConnection({
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    });
  }

  async registerUser(username: any, email: any, password: any) {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const [results] = await this.db_connection.execute(
        "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );

      return results.insertId;
    } catch (error) {
      throw error;
    }
  }
}

/*
import mysql from 'mysql2'
import * as dotenv from 'dotenv'
import { Account } from '~/types/accounts'
import { rejects } from 'assert'

dotenv.config()

export class RegisterService {
  createNewAccount(
    username: string,
    email: string,
    password: string
  ): Promise<Account>
  return new Account((resolve, reject) => INSERT INTO
  )
}
*/