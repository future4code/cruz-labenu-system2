import { useHistory } from 'react-router-dom'

export const useGo = () => {
  const router = useHistory()

  return {
    home: () => router.push('/'),
    class: () => router.push('/class'),
    students: () => router.push('/students'),
    teachers: () => router.push('/teachers'),
    skills: () => router.push('/skills'),
    hobbies: () => router.push('/hobbies'),
    modules: () => router.push('/modules')
  } 
}