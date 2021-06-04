export interface Teacher {
  id: string
  name: string
  email: string
  gender: Gender
  birthDate: string
  state: string
  country: string
  description: string
}

type Gender = 'male' | 'female'
