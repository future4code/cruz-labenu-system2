import { Input } from 'components/Input'
import {useGo} from  'hooks/useGo'
import * as S from './styles'
import MenuNav from 'components/MenuNav';

import labeLogo from 'assets/img/Labenu_principal.webp'

export const Layout: React.FC = ({ children: page }) => (
    <S.Container>
      <MenuNav />
      <Input label='Pesquisa' />
      {page}
    </S.Container>
  )
)