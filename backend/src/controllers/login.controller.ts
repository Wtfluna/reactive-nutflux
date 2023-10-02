import { Router } from 'express'
import { LoginService } from '~/services/login.service'

const LoginController = Router()

const service = new LoginService()

LoginController.post('/', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const success: string | null = await service.connectToAccount(email, password)

  if (success) {
    res.status(200)
    res.json(success)
  } else {
    res.status(403)
    res.send('Authentication failed, wrong password and/or email address')
  }
})
export { LoginController }
