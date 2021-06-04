import * as S from './styles'
import {CardBox} from 'components/CardBox'
import {useRequest} from '../../hooks/useRequest'
import api from 'services/api'
import {CardClass} from '../../components/CardClass/index'
import {CardHobbie} from '../../components/CardHobbie/index'
import {CardSkill} from '../../components/CardSkill/index'
import {CardTeacher} from '../../components/CardTeacher/index'

export const Home = () => {
  const [grades, isLoading, hasError] = useRequest([], api.getAll, 'class', {
    limit: 4
  })
  const [hobbies, isLoadingHobbies, hasErrorHobbies] = useRequest(
    [],
    api.getAll,
    'hobbies',
    {limit: 8}
  )
  const [skills, isLoadingSkills, hasErrorSkills] = useRequest(
    [],
    api.getAll,
    'skills',
    {limit: 6}
  )
  const [teachers, isLoadingTeachers, hasErrorTeachers] = useRequest(
    [],
    api.getAll,
    'teachers',
    {limit: 4}
  )

  return (
    <S.Container>
      <S.Title>Turmas em progresso</S.Title>
      <S.CardContainer>
        {(grades.length || !isLoading) &&
          grades.map((grade: any) => (
            <CardClass key={grade.name} {...{grade, isLoading}} />
          ))}
        <CardHobbie title='Hobbies' {...{hobbies}} />
        <CardSkill title='Skills' {...{skills}} />
        <CardTeacher title='Professores' columns={2} {...{teachers}} />
      </S.CardContainer>
    </S.Container>
  )
}
