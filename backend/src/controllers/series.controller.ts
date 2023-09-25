import { Router } from 'express'
import { SeriesService } from '~/services/series.service'

const SeriesController = Router()

const service = new SeriesService()

SeriesController.get('/all', async (req, res) => {
  const series = await service.findAll()
  res.status(200)
  res.json(series)
  return res
})

SeriesController.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const series = await service.findById(id)
  res.status(200)
  res.json(series)
  return res
})

export { SeriesController }
