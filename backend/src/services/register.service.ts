/* eslint-disable multiline-comment-style */
/*
import mysql from 'mysql2'
eslint-disable-next-line multiline-comment-style
import * as dotenv from 'dotenv'
import { Account } from '~/types/accounts'
import { rejects } from 'assert'
dotenv.config()
*/

// const bcrypt = require('bcrypt');
import mysql from 'mysql2'
export class RegisterService {
  createNewAccount(username: any, email: any, password: any): import("../types/accounts").Account | PromiseLike<import("../types/accounts").Account> {
    throw new Error('Method not implemented.');
  }
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
      /* Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
*/
      const [results] = await this.db_connection.execute(
        "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
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
*/