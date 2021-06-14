export interface User {
  id: string
  name: string
  nickname?: string
  email: string
  password: string
  gender: Gender
  birthDate: string
  side: Side
  state?: string
  country?: string
  description?: string
  class_id?: string
}

export type Gender = 'male' | 'female'
export type Side = 'front-end' | 'back-end' | 'full-stack'
