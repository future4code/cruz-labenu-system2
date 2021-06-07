export interface User {
  id: string
  name: string
  nickname?: string
  email: string
  password: string
  gender: Gender
  birthDate: string
  state?: string
  country?: string
  description?: string
  class_id?: string
}

export type Gender = 'male' | 'female'
