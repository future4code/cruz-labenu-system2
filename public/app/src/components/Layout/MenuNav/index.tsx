import { useGo } from 'hooks/useGo'
import labeLogo from 'assets/img/Labenu_principal.webp'
import { useEffect } from 'react'
import * as S from './styles'

const MenuNav = () => {
    const menuItems = ['Home', 'Professores', 'Estudantes', 'Turmas']
    const go = useGo()

    useEffect(() => {
        renderMenuItems()
    }, [])

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

    const renderMenuItems = () => menuItems.map(items =><S.MenuItems onClick={goTo(items)}>{items}</S.MenuItems>)

    return (
        <S.Container>
            <S.Logo alt='Logo Labenu' src={labeLogo}></S.Logo>
            <S.MenuList >{renderMenuItems()}</S.MenuList>
        </S.Container>
    )
}

export default MenuNav