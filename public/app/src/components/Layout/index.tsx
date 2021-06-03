import { Input } from 'components/Input'
import * as S from './styles'

export const Layout: React.FC = ({children: page}) => {
  return (
    <S.Container>
      <nav>
        <div>link1</div>
        <div>link2</div>
        <div>link3</div>
        <div>link4</div>
        <div>link5</div>
        <div>link6</div>
      </nav>
      
      <Input label='Pesquisa' />

      {page}

    </S.Container>
  )
}