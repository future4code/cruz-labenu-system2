import { useRequest } from 'hooks/useRequest'
import api from 'services/api'
import {useGo} from 'hooks/useGo'
import * as S from './styles'

export const Class = () => {
  const [data, isLoading, hasError] = useRequest([], api.getAll, 'class')
  const go = useGo()

  console.log(data)

  return (
    <S.Container>
      <S.Title>Classsss!</S.Title>
      <button onClick={go.home}>Go Home</button>
      <ul>
        {!isLoading ? data.map((currentClass: any) => <li>{currentClass.name}</li>)
        : 'Loading...'
        }
      </ul>
    </S.Container>
  )
}