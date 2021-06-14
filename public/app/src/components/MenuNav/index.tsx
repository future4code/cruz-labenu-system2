import * as S from './styles'

import labeLogo from 'assets/img/Labenu_principal.webp'


export const MenuNav = () => {
    const menuItems = ['Home', 'Professores', 'Estudantes', 'Turmas']
    const menuLinks = ['/', '/teachers', '/students', '/class']

    const renderMenuItems = () => menuItems.map((items, index) =>
        <S.Nav to={menuLinks[index]}
        exact
        >{items}</S.Nav>
    )

    return (
        <nav>
            <S.Logo alt='Logo Labenu' src={labeLogo}></S.Logo>
            <S.MenuList >{renderMenuItems()}</S.MenuList>
        </nav>
    )
}


