import { connection } from '.'

const hobbiesTable = () => connection('Hobbies')

export type Hobbies = {
    id: string
    name: string
}

export const getAllHobbies = async () => hobbiesTable()

export const createHobbie = async (newHobbie: Hobbies) =>
    hobbiesTable().insert(newHobbie)

export const updateHobbie = async (id: string, hobbieData: Omit<Hobbies, 'id'>) =>
    hobbiesTable().update(hobbieData).where({ id })

export const deleteHobbie = async (id: string) =>
    hobbiesTable().delete().where({ id })
