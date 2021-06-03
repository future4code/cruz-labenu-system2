import * as S from './styles'

type Props = {
  title?: string
  rows?: number
  columns?: number
}

export const Card = (props: Props) => {
  return (
    <S.Container {...props}>
      <S.Title>{props.title || 'Card Title'}</S.Title>
    </S.Container>

  )
}