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
