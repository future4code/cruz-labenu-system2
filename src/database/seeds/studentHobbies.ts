import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('StudentHobbies').del()

    // Inserts seed entries
    await knex('StudentHobbies').insert([
        {
            student_id: "ef7ba37d-6f0d-48e6-8e0a-f43a9117af45",
            hobbies_id: "05df3d99-ebb9-4cd6-ad88-2a425712a44f",
        },
        {
            student_id: "77152909-35a0-4278-b67f-e13fdb639622",
            hobbies_id: "4c4b534d-28e3-4d06-9947-6d683d9834ee",
        },
        {
            student_id: "ef7ba37d-6f0d-48e6-8e0a-f43a9117af45",
            hobbies_id: "4c4b534d-28e3-4d06-9947-6d683d9834ee",
        }
    ])
}
