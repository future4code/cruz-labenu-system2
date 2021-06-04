import {Class} from 'entities/Class'
import * as S from './styles'
import {CardBox} from 'components/CardBox'
import reactIcon from 'assets/img/react.jpeg'
import {Skill} from 'entities/Skill'
import {Teacher} from 'entities/Teacher'

type Props = {
  teachers: Partial<Teacher>[]
  title?: string
  rows?: number
  columns?: number
}

export const CardTeacher = ({teachers, title, rows, columns}: Props) => {
  console.log('teachers: ', teachers)
  return (
    <CardBox {...{title, rows, columns}}>
      {teachers.length &&
        teachers.map(teacher => (
          <S.Container>
            <S.Image src={reactIcon} />
            <S.Title>{teacher.name}</S.Title>
            <S.Type>{Math.random() > 0.5 ? 'Back-end' : 'Front-end'}</S.Type>
          </S.Container>
        ))}
    </CardBox>
  )
}
