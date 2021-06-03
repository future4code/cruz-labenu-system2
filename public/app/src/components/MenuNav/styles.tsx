import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

export const Logo = styled.img`
  width: 180px;
  margin: 12px;
  margin-bottom: 38px;
`

export const Nav = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.button};
  font-weight: bold;
  margin: 1rem;

  &:visited{
    color: ${({ theme }) => theme.cardPrimary};
  }
  &.active{
    color: ${({ theme }) => theme.primary};
  } 
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`
