export const getAllStudants = async (): Promise<any> => {
  const result = await connection.select('*').from('Studant')
  return result
}

export const createStudant = async (studanteData: Studant): Promise<void> => {
  await connection
    .insert({
      name: studanteData.name,
      email: studanteData.email,
      birthDate: studanteData.birthDate,
      class: studanteData.class
    })
    .into('Studant')
}
