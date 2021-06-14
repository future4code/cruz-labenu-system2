import { Class } from 'entities/Class'
import * as S from './styles'
import { CardBox } from 'components/CardBox';

type Props = {
  grade: Partial<Class>
  title?: string
  rows?: number
  columns?: number
}

export const CardClass = ({grade, title, rows, columns}: Props) => {
  return (
    <CardBox {...{title, rows, columns}} >
    <S.Container>

    <S.Header>
    <S.Situation>Iniciado</S.Situation>
    <S.Date>{grade.startDate}</S.Date>
    <S.PatronoPicture src={grade.patronPicture} alt={`Foto de ${grade.patron}, patrono da turma ${grade.name}`} />
    <S.Title>{grade.name}</S.Title>
    </S.Header>
    
    <S.Content>
    <S.PatronoName>Turma criada em homenagem a <strong>{grade.patron}</strong>.</S.PatronoName>
    <S.Students>Alunos: {grade.module}</S.Students>
    <S.Teachers>Professores: {grade.module}</S.Teachers>
    </S.Content>
    
    <S.Bottom>
      <S.Progress>Modulo: {grade.module}</S.Progress>
    </S.Bottom>

    </S.Container>
    </CardBox>

  )
}