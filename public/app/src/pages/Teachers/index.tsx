import { useRequest } from 'hooks/useRequest'
import api from 'services/api'
import { useGo } from 'hooks/useGo'
import * as S from './styles'

export const Teachers = () => {
    const [data, isLoading, hasError] = useRequest([], api.getAll, 'teachers')
    const go = useGo()

    return (
        <S.Container>
            <S.Title>Techears!</S.Title>

            <button onClick={go.home}>Go Home</button>
            <ul>
                {!isLoading ? data.map((currentClass: any) => <li>{currentClass.name}</li>)
                    : 'Loading...'
                }
            </ul>
            <button onClick={<AddTeacher>}>ADICIONAR</button>
        </S.Container>
    )
}