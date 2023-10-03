import { RowDataPacket } from 'mysql2'

export interface User extends RowDataPacket {
  id: number
  username: string
  account_id: number
  avatar: string
}
