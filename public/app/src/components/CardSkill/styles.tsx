import styled from 'styled-components'

export const Container = styled.div`
  height: 12%;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 2rem;
`

export const Title = styled.p`
  font-size: ${p => p.theme.typography.subtitle3};
`

export const Image = styled.img`
  width: 20%;
`
