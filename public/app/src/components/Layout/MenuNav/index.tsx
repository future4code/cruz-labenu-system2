import * as S from './styles'

import labeLogo from '../../../assets/img/Labenu_principal.webp'

const MenuNav = () => {
    const menuItems = ['Home', 'Professores', 'Estudantes', 'Turmas']

    const renderMenuItems = () => menuItems.map(items => <div>{items}</div>)

    return (
        <S.Container>
            <S.Logo alt='Logo Labenu' src={labeLogo}></S.Logo>
            <div>{renderMenuItems()}</div>
        </S.Container>
    )
}

export default MenuNav