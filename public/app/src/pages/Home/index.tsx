import { Input } from 'components/Input'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Labenu System Home Page</S.Title>
      <Input label='Pesquisa' type='search' placeholder='Digite algo para pesquiar' />
    </S.Container>
  )
}