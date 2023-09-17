import { Router } from 'express'
import { PetsService } from '~/resources/pets/pets.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const PetsController = Router()

/**
 * Instance de notre service
 */
const service = new PetsService()

/**
 * Trouve tous les animaux
 */
PetsController.get('/', (req, res) => {
  return res
    .status(200)
    .json(service.findAll())
})

/**
 * Trouve un animal en particulier
 */
PetsController.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID non valide')
  }

  const pet = service.findOne(id)

  if (!pet) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(pet)
})

/**
 * Créé un animal
 */
PetsController.post('/', (req, res) => {
  const createdPet = service.create(req.body)

  return res
    .status(201)
    .json(createdPet)
})

/**
 * Mise à jour d'un animal
 */
PetsController.patch('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  const updatedPet = service.update(req.body, id)

  return res
    .status(200)
    .json(updatedPet)
})

/**
 * Suppression d'un animal
 */
PetsController.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID invalide')
  }

  return res
    .status(200)
    .json(service.delete(id))
})

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { PetsController }