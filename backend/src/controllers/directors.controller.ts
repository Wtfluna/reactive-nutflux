import { Router } from 'express'
import { DirectorsService } from '~/services/directors.service'

const DirectorsController = Router()

const service = new DirectorsService()

DirectorsController.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const director = await service.findById(id)
  res.status(200)
  res.json(director)
  return res
})

export { DirectorsController }
