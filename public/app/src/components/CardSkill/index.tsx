import {Class} from 'entities/Class'
import * as S from './styles'
import {CardBox} from 'components/CardBox'
import reactIcon from 'assets/img/react.jpeg'
import {Skill} from 'entities/Skill'

type Props = {
  skills: Partial<Skill>[]
  title?: string
  rows?: number
  columns?: number
}

export const CardSkill = ({skills, title, rows, columns}: Props) => {
  return (
    <CardBox {...{title}}>
      {skills.length &&
        skills.map(skill => (
          <S.Container>
            <S.Image src={reactIcon} />
            <S.Title>{skill.name}</S.Title>
          </S.Container>
        ))}
    </CardBox>
  )
}
