import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid: 80px 1fr / 1fr;
  padding-bottom: ${p => p.theme.space(1)};
`

export const Title = styled.h1`
  color: ${ ({theme}) => theme.textPrimary};
  font-size: ${ ({theme}) => theme.typography.subtitle1};
  text-align: left;
  align-self: start;
`

export const CardContainer = styled.div`
  display: grid;
  grid: 1fr 2fr / repeat(4, 1fr);
  gap: 2rem;
`

