import type { Pet } from '~~/types/pets'

/**
 * On imagine que ce sont des données reçues de la base de données
 *
 * On spécifie ici que `animals` est un tableau contenant des `Animal`
 */
export const pets: Pet[] = [
  { id: 1, name: 'Snoopy', type: 'dog' },
  { id: 2, name: 'Pepper', type: 'cat' },
  { id: 3, name: 'Whisky', type: 'dog' },
  { id: 4, name: 'Tiplouf', type: 'cat' }
]