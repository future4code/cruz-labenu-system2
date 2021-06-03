import styled from 'styled-components'

type Props = {
  rows?: number
  columns?: number
}

export const Container = styled.div<Props>`
  min-width: 100px;
  min-height: 100px;
  
  ${p => p.rows && `grid-row-end: span ${p.rows}`};
  ${p => p.columns && `grid-column-end: span ${p.columns}`};
  
  
  background-color: #f8edff;
  padding: ${ ({theme}) => theme.space(2)};
  border-radius: ${ ({theme}) => theme.space(4)};
`

export const Title = styled.h3`
  font-size: ${props => props.theme.typography.subtitle2}
`