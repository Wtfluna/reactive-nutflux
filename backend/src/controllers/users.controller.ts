import { Router } from 'express'
import { UserService } from '~/services/users.service'

const UserController = Router()

const service = new UserService()

UserController.post('/', async (req, res) => {
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

UserController.get('/account/:account_id', async (req, res) => {
  const accountId = Number(req.params.account_id)
  const users = await service.findUsersByAccountId(accountId)
  res.status(200)
  res.json(users)
  return res
})

export { UserController }
