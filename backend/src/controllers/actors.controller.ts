import { Router } from 'express'
import { ActorsService } from '~/services/actors.service'

const ActorsController = Router()

const service = new ActorsService()

ActorsController.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const actor = await service.findById(id)
  res.status(200)
  res.json(actor)
  return res
})

export { ActorsController }
