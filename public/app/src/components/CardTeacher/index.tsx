import * as S from './styles'
import {CardBox} from 'components/CardBox'
import reactIcon from 'assets/img/react.png'
import {User} from 'entities'

type Props = {
  teachers: Partial<User>[]
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
            <S.Type>{teacher.side}</S.Type>
          </S.Container>
        ))}
    </CardBox>
  )
}
