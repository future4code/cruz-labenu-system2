import {useEffect, useState} from 'react'

type Options = {
  wait?: boolean
  limit?: number
  offset?: number
  orderBy?: string
  order?: string
}

type RequestResponse = [any, boolean, any, (options?: Options) => void]

export const useRequest = (
  initialValue: [] | {},
  service: any,
  args: any,
  options?: Options
): RequestResponse => {
  const [data, setData] = useState<[] | {}>(initialValue)
  const [isLoading, setIsLoading] = useState<boolean>(!options?.wait)
  const [hasError, setHasError] = useState<any>(false)

  const getData = async (options?: any) => {
    try {
      const apiData = await service(args, options)
      setData(apiData)
    } catch (e) {
      setHasError(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!options?.wait) {
      getData()
    }
  }, [])

  return [data, isLoading, hasError, getData]
}
