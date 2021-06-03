import { Input } from 'components/Input'
import * as S from './styles'
import MenuNav from 'components/MenuNav';

export const Layout: React.FC = ({children: page}) => {
  return (
    <S.Container>
      <MenuNav />
      
      <Input label='Pesquisa' />

      {page}

    </S.Container>
  )
}