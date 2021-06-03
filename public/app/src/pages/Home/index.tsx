import * as S from './styles'
import { useHistory } from 'react-router-dom';
import { Card } from 'components/Card';

export const Home = () => {
  const history = useHistory()
  return (
    <S.Container>
      <S.Title>Title</S.Title>
      <S.CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card columns={3} />
      </S.CardContainer>
    </S.Container>
  )
}