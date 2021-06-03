import axios, {Method} from 'axios'

const baseURL = 'http://localhost:3000/api'

const api = axios.create({baseURL})

type Props = {
  method?: Method
  url?: string
  params?: Record<string, any>
  data?: Record<string, any>
}

const base = async ({method = 'get', url = '', params, data}: Props) => {
  try {
    const response = await api({method, url, params, data})
    return response.data
  } catch (e) {
    console.log({e})
  }
}

export default {
  api: base,
  getAll: (url: string) => base({url}),
  addNew: (url: string, data: Props['data']) =>
    base({method: 'post', url, data}),
  getById: (url: string, id: string) => base({url: `${url}/${id}`}),
  updateById: (url: string, id: string) =>
    base({method: 'put', url: `${url}/${id}`}),
  deleteById: (url: string, id: string) =>
    base({method: 'delete', url: `${url}/${id}`})
}
