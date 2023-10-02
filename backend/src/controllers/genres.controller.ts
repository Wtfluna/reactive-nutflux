import { Router } from 'express'
import { GenresService } from '~/services/genres.service'

const GenresController = Router()

const service = new GenresService()

GenresController.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const genres = await service.findById(id)
  res.status(200)
  res.json(genres)
  return res
})

export { GenresController }
