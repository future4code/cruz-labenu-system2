export const errorMessage = (errors: any, schema?: any) => {
  if (!Array.isArray(errors) && !errors.length) return
  const {title = '', examples = ''} = schema || ''

  let message = errors.map((error: any) => {
    if (error.keyword === 'required') return error.message
    return `${error?.instancePath?.replace(/[#\/]/g, '')} ${error.message}`
  })

  if (title && examples) {
    return {
      error: {
        title,
        message,
        examples
      }
    }
  } else {
    return {
      message
    }
  }
}
