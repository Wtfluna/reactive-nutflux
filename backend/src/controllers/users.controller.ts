import { Router } from 'express'
import { UserService } from '~/services/users.service'

const UserController = Router()

const service = new UserService()

UserController.post('/users', async (req, res) => {
  const username = req.body.username
  const account_id = req.body.account_id
  const avatar = req.body.avatar
  const success: boolean = await service.createNewUser(
    username,
    account_id,
    avatar
  )
  res.status(200)
  res.json(success)
})

export { UserController }
