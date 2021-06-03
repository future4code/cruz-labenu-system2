import { useHistory } from 'react-router-dom'

const useGo = () => {
  const router = useHistory()

  const home = () => router.push('/')


  return {
    home
  }
}

export default useGo