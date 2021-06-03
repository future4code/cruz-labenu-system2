import { Input } from 'components/Input'
import * as S from './styles'
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory()
  return (
    <S.Container>
      <S.Title>Labenu System Home Page</S.Title>
      <Input label='Pesquisa' type='search' placeholder='Digite algo para pesquiar' />
    </S.Container>
  )
}