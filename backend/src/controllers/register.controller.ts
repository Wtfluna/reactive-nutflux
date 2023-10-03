import { Router } from 'express'
import { RegisterService } from '~/services/register.service'

const RegisterController = Router()

const service = new RegisterService()

RegisterController.post('/', async (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  const success: boolean = await service.createNewAccount(
    username,
    email,
    password
  )
  res.status(200)
  res.json(success)
})
export { RegisterController }
