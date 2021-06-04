import { useRequest } from 'hooks/useRequest'
import { FormEvent } from "react";
import api from 'services/api'
import { useGo } from 'hooks/useGo'
import { initialForm } from 'constants/inputs'
import { useForm } from "hooks/useForm";
import * as S from './styles'

export const Teachers = () => {
    const [data, isLoading, hasError] = useRequest({}, api.addNew, 'teachers')
    const [form, onChange, resetForm] = useForm(initialForm)
    const go = useGo()

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        data
        resetForm
    }

    return (
        <div>
            <h1>New</h1>
            <form
                onSubmit={sendForm}>
                <input
                    required
                    type="text"
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome Completo"}
                    title={'Nome inválido'}
                    pattern={"^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$"}
                />

                <input
                    required
                    type="number"
                    name={'age'}
                    value={form.age} onChange={onChange}
                    placeholder={"Idade"}
                    title={'formato de idade inválido'}
                    min={18}
                    pattern={"^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$"}
                />

                <input
                    required
                    type="text"
                    name={'text'}
                    value={form.text} onChange={onChange}
                    placeholder={"Texto de Cantidatura"}
                    pattern={`^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$`}
                    title={"Cuidado com os caracteres especiais"} />

                <input
                    required
                    type="text"
                    name={'profession'}
                    value={form.profession} onChange={onChange}
                    placeholder={"Profissão"}
                    title={'A profissão deve ter no mínimo 3 caracteres, sem acento'}
                    pattern={"([a-zA-Z]*[a-zA-Z]||[ ]){3,}[a-zA-Z0-9]*$"} />

                <select
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >

                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>

                </select>

                <button>Enviar</button>
            </form>

        </div>
    )
}

