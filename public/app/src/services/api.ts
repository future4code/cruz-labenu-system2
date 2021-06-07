import axios, {Method} from 'axios'

const baseURL = 'http://localhost:3100/api'

const api = axios.create({baseURL})

type Props = {
  method?: Method
  url?: string
  params?: Record<string, any>
  data?: Record<string, any>
}

const base = async ({method = 'get', url = '', params, data}: Props) => {
  console.log('request: ', url, params)
  try {
    const response = await api({method, url, params, data})
    return response.data
  } catch (e) {
    console.error({e})
  }
}

export default {
  api: base,
  getAll: (url: string, params?: Record<string, any>) => base({url, params}),
  addNew: (url: string, data: Props['data']) =>
    base({method: 'post', url, data}),
  getById: (url: string, id: string) => base({url: `${url}/${id}`}),
  updateById: (url: string, id: string) =>
    base({method: 'put', url: `${url}/${id}`}),
  deleteById: (url: string, id: string) =>
    base({method: 'delete', url: `${url}/${id}`})
}
