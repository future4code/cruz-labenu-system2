import {useRequest} from 'hooks/useRequest'
import {FormEvent} from 'react'
import api from 'services/api'
import {useParams} from 'react-router-dom'
import {useGo} from 'hooks/useGo'
import {initialForm} from 'constants/inputs'
import {useForm} from 'hooks/useForm'
import * as S from './styles'

export const AddTeacherOrStudent = () => {
  const [form, onChange, resetForm] = useForm(initialForm)
  const [data, isLoading, hasError, getData] = useRequest(
    {},
    api.addNew,
    'teachers',
    {wait: true}
  )
  const go = useGo()

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData(form)
    resetForm()
  }

  return (
    <div>
      <h1>New</h1>
      <form onSubmit={sendForm}>
        <input
          required
          type='text'
          name='name'
          value={form.name}
          onChange={onChange}
          placeholder={'Nome Completo'}
          title={'Nome inválido'}
          pattern={'^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$'}
        />

        <input
          required
          type='text'
          name='email'
          value={form.email}
          onChange={onChange}
          placeholder={'email'}
        />

        <input
          required
          type='date'
          name='birthDate'
          value={form.birthDate}
          onChange={onChange}
          placeholder={'Data de nascimento'}
        />

        <input
          required
          type='text'
          name='state'
          value={form.state}
          onChange={onChange}
          placeholder={'Estado'}
        />

        <input
          required
          type='text'
          name='description'
          value={form.description}
          onChange={onChange}
          placeholder={'Descrição'}
        />
        <input
          required
          type='text'
          name='classId'
          value={form.classId}
          onChange={onChange}
          placeholder={'Descrição'}
        />
        <select name='gender' value={form.gender} onChange={onChange} required>
          <option value='female'>female</option>
          <option value='male'>male</option>
        </select>

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default AddTeacherOrStudent
