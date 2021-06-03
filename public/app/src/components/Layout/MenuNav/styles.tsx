import styled from 'styled-components'

export const Logo = styled.img`
  width: 180px;
`

export const Container = styled.div``

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuItems = styled.button`
  font-size: ${({ theme }) => theme.typography.button};
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
`