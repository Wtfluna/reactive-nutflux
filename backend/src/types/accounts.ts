import { RowDataPacket } from 'mysql2/promise'

export interface Account extends RowDataPacket {
  id: number
  username: string
  email: string
  password: string
}
