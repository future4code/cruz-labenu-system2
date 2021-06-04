export const errorMessage = (errors: any) => {
  if (!Array.isArray(errors) && !errors.length) return

  let message = errors.map(
    (error: any) =>
      `${error?.instancePath?.replace(/[#\/]/g, '')} ${error?.message}`
  )

  return message.join('\n')
}
