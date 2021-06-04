import styled from 'styled-components'

type Props = {
  rows?: number
  columns?: number
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: start;
`

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid: 1fr 4fr / 1fr 3fr;
  justify-items: top;
  place-items: center start;
`
export const Situation = styled.p`
  font-size: ${p => p.theme.typography.caption};


`
export const Date = styled.p`
  font-size: ${p => p.theme.typography.body1};

`

export const PatronoPicture = styled.img`
  /* place-self: start end; */
  position: absolute;
  top: 0;
  right: -2%;
  width: 40%;
  /* clip-path: circle(50%); */
  clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);

`

export const Title = styled.h3`
  font-size: ${p => p.theme.typography.subtitle2};
  color: ${p => p.theme.primary};
  grid-row: 2 / 3;
  grid-column: 1 / 4;
`


export const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`
export const PatronoName = styled.p`
  font-size: ${p => p.theme.typography.body1};
`
export const Description = styled.p``

export const Students = styled.p``
export const Teachers = styled.p``

export const Bottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 10%;
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.backgroundPrimary};
  display: flex;
  flex-grow: 1;
  justify-content: center; 
  align-items: center;
`
export const Progress = styled.p`
  font-size: 1rem;
`