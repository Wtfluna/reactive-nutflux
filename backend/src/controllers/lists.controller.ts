import { Router } from 'express'
import { ListsService } from '~/services/lists.service'

const ListsController = Router()

const service = new ListsService()

ListsController.get('/user/:user_id', async (req, res) => {
  const userId = Number(req.params.user_id)
  const lists = await service.findListsByUserId(userId)
  res.status(200)
  res.json(lists)
  return res
})

export { ListsController }
