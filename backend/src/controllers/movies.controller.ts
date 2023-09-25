import { Router } from 'express'
import { MoviesService } from '~/services/movies.service'

const MoviesController = Router()

const service = new MoviesService()

MoviesController.get('/all', async (req, res) => {
  const movies = await service.findAll()
  res.status(200)
  res.json(movies)
  return res
})

MoviesController.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const movie = await service.findById(id)
  res.status(200)
  res.json(movie)
  return res
})

MoviesController.get('/genre/:genre_id', async (req, res) => {
  const genreId = Number(req.params.genre_id)
  const movies = await service.findByGenreId(genreId)
  res.status(200)
  res.json(movies)
  return res
})

export { MoviesController }

/*
 *  Un controller gère toute la partie req/res. C'est lui qui reçoit la requête brut.
 *  Il reçoit l'objet HTTP (body, get/post (méthode), header etc)
 *  Son boulot: prendre les infos qui l'interesse dans la requête par ex get et /all
 *  Une fois qu'il a les infos nécessaires, il demande à service de faire findAll
 *  Ensuite, son deuxième boulot est de construire la réponse à partir des données reçues de service
 */
