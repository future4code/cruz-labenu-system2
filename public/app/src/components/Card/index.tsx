import * as S from './styles'

type Props = {
  rows?: number
  columns?: number
}

export const Card = (props: Props) => {
  return (
    <S.Container {...props}>
      <S.Title>Card Title</S.Title>
    </S.Container>

  )
}