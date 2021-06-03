import * as S from './styles'
import { useHistory } from 'react-router-dom';
import { Card } from 'components/Card';
import { useRequest } from '../../hooks/useRequest';
import api from 'services/api';

export const Home = () => {
  const [data, isLoading, hasError] = useRequest([], api.getAll, 'class', {limit: 4})
  return (
    <S.Container>
      <S.Title>Class in progress</S.Title>
      <S.CardContainer>
        {(data.length || !isLoading) && data.map((currentClass: any) => 
          <Card
            key={currentClass?.name}
            title={currentClass.name}
            {...{currentClass, isLoading}}
          />)}
        <Card />
        <Card columns={3} />
      </S.CardContainer>
    </S.Container>
  )
}