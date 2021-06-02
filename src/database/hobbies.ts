import { connection } from '.'

const hobbiesTable = () => connection('Hobbies')
const studentHobbiesTable = () => connection('StudentHobbies')

export type Hobbies = {
    id: string
    name: string
}

export const getAllHobbies = async () => hobbiesTable()

export const getHobbiesDetails = async (name: string) => {
    const [searchedHobbies] = await studentHobbiesTable()
        .select("Hobbies.name as hobbies", "Student.name")
        .join('Hobbies', 'StudentHobbies.hobbies_id', 'Hobbies.id')
        .join('Student', 'StudentHobbies.student_id', 'Student.id')
        .where('Hobbies.name', 'like', `%${name}%`)
    return searchedHobbies
    
}

export const createHobbies = async (newHobbies: Hobbies) =>
    hobbiesTable().insert(newHobbies)

export const updateHobbies = async (id: string, hobbiesData: Omit<Hobbies, 'id'>) =>
    hobbiesTable().update(hobbiesData).where({ id })

export const deleteHobbies = async (id: string) =>
    hobbiesTable().delete().where({ id })
