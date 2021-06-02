import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('TeacherSkills').del()

    // Inserts seed entries
    await knex('TeacherSkills').insert([
        {
            teacher_id: "ddd03ba5-f425-41da-bb93-547329cdba6e",
            skill_id: "0a83100f-4dfb-4d8f-aa48-5980d046cb37",
        },
        {
            teacher_id: "0740143c-a00a-4173-a4cc-e951fda3515b",
            skill_id: "3b848408-2280-4c3e-976a-4c51290a6e3e",
        },
        {
            teacher_id: "ddd03ba5-f425-41da-bb93-547329cdba6e",
            skill_id: "0a83100f-4dfb-4d8f-aa48-5980d046cb37",
        }
    ])
}
