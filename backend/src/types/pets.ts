export type PetCategory = 'cat' | 'dog'

export interface Pet {
  id: number
  name: string
  type: PetCategory
}