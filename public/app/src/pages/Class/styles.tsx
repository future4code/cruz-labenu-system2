import styled from 'styled-components'

export const Container = styled.div`
  width: clamp(300px, 80%, 1280px);
  margin: auto;
`

export const Title = styled.h1`
  color: ${ ({theme}) => theme.textPrimary};
  font-size: ${ ({theme}) => theme.typography.title};
  text-align: center;
`

