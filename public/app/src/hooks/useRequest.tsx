import { useEffect, useState } from "react"

type Options = {
  wait?: boolean
  limit?: number
  offset?: number
}

type RequestResponse = [any, boolean, any, () => void]

export const useRequest = (
  initialValue: [] | {},
  service: any,
  args: any,
  options?: Options): RequestResponse  => {
  const [data, setData] = useState<[] | {}>(initialValue)
  const [isLoading, setIsLoading] = useState<boolean>(!options?.wait)
  const [hasError, setHasError] = useState<boolean>(false)
  
  const getData = async () => {
    try {
      const apiData = await service(args, options)
      setData(apiData)
    } catch(e) {
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