import { useRequest } from 'hooks/useRequest'
import api from 'services/api'
import {useGo} from 'hooks/useGo'
import * as S from './styles'

export const Students = () => {
  const [data, isLoading, hasError] = useRequest([], api.getAll, 'students')
  const go = useGo()

  return (
    <S.Container>
      <S.Title>Students!</S.Title>
      <button onClick={go.home}>Go Home</button>
      <ul>
        {!isLoading ? data.map((currentClass: any) => <li>{currentClass.name}</li>)
        : 'Loading...'
        }
      </ul>
    </S.Container>
  )
}