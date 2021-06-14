import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: ${ ({theme}) => theme.textPrimary};
  font-size: ${ ({theme}) => theme.typography.title};
  text-align: center;
`

