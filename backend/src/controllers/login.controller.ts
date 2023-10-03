import { Router } from 'express'
import { LoginService } from '~/services/login.service'

const LoginController = Router()

const service = new LoginService()

LoginController.post('/', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const token: string | null = await service.connectToAccount(email, password)

  if (token) {
    res.status(200)
    res.json(token)
  } else {
    res.status(403)
    res.send('Authentication failed, wrong password and/or email address')
  }
})
export { LoginController }
