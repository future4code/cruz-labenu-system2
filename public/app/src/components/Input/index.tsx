import { InputHTMLAttributes } from 'react'
import { JsxElement } from 'typescript'
import search from 'assets/icons/search.svg'
import * as S from './styles'

type Props = {
  label: string
  icon?: string | JsxElement
} & InputHTMLAttributes<HTMLInputElement>


export const Input = ({label, icon, ...inputOptions}: Props) => {
  console.log(inputOptions)
  return (
    <div>
    <label>{label} 
      <input {...inputOptions} />
    </label>
    </div>


  )
}