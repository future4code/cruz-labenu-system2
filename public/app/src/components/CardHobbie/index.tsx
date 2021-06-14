import {Class} from 'entities/Class'
import * as S from './styles'
import {CardBox} from 'components/CardBox'
import hobbieIcon from 'assets/img/hobbie.jpg'
import {Hobbie} from 'entities/Hobbie'

type Props = {
  hobbies: Partial<Hobbie>[]
  title?: string
  rows?: number
  columns?: number
}

export const CardHobbie = ({hobbies, title, rows, columns}: Props) => {
  console.log({hobbies})
  return (
    <CardBox {...{title}}>
      {hobbies &&
        hobbies?.length &&
        hobbies.map(hobbie => (
          <S.Container>
            <S.Image src={hobbieIcon} />
            <S.Title>{hobbie.name}</S.Title>
          </S.Container>
        ))}
    </CardBox>
  )
}
