import {InputHTMLAttributes} from 'react'
import {JsxElement} from 'typescript'
import * as S from './styles'

type Props = {
  label: string
  icon?: string | JsxElement
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({label, icon, ...inputOptions}: Props) => {
  return (
    <div>
      <label>
        {label}
        <input {...inputOptions} />
      </label>
    </div>
  )
}
