import {ReactNode} from 'react'
import * as S from './styles'

type Props = {
  title?: string
  rows?: number
  columns?: number
  children?: ReactNode
}

export const CardBox = ({title, rows, columns, children}: Props) => {
  return (
    <S.Container {...{rows, columns}}>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  )
}
