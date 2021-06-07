export const errorMessage = (errors: any, schema?: any) => {
  console.log(errors)
  if (!Array.isArray(errors) && !errors.length) return
  const {title = '', examples = ''} = schema || ''
  console.log(`title: ${title} example: ${examples}`)

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
