import { Input } from 'components/Input'
import {useGo} from  'hooks/useGo'
import * as S from './styles'

import labeLogo from 'assets/img/Labenu_principal.webp'

export const Layout: React.FC = ({ children: page }) => {
  const menuItems = ['Home', 'Professores', 'Estudantes', 'Turmas']
  const go = useGo()

  const goTo = (item: string) => {
    switch (item) {
      case 'Home':
        return go.home
      case 'Professores':
        return go.teachers
      case 'Estudantes':
        return go.students
      case 'Turmas':
        return go.class
    }
  }

  const renderMenuItems = () => menuItems.map(items => <S.MenuItems onClick={goTo(items)}>{items}</S.MenuItems>)

  return (
    <S.Container>
      <nav>
        <S.Logo alt='Logo Labenu' src={labeLogo}></S.Logo>
        <S.MenuList >{renderMenuItems()}</S.MenuList>
      </nav>

      <Input label='Pesquisa' />

      {page}

    </S.Container>
  )
}