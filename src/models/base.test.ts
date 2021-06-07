import {BaseModel} from './base'

class baseModel extends BaseModel {}
const sut = new baseModel('Class')
afterAll(sut.close)

describe('BaseModel', () => {
  it('Should list all results in a table', async () => {
    const resultList = await sut.getAll()
    expect(resultList.length).toBeGreaterThan(1)
  })

  it('Should limit the result when have limit', async () => {
    const resultList = await sut.getFiltered({limit: 1})
    expect(resultList.length).toBe(1)
  })

  it('Should order the list', async () => {
    const resultList = await sut.getFiltered({
      offset: 5,
      limit: 10,
      orderBy: 'name'
    })
    expect(resultList.length).toBe(10)
    expect(resultList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({name: expect.any(String)})
      ])
    )
  })

  it('Should create new with valid params, delete if exist, filtering by name', async () => {
    await sut.delete('123456')
    await sut.save({id: '123456', name: 'Random Name'})
    const infoInDb = await sut.findOne({name: 'Random Name'})
    expect(infoInDb).toEqual(expect.objectContaining({name: 'Random Name'}))
  })

  it('Should delete if exist, create, update name, find this, math value', async () => {
    await sut.delete('111')
    await sut.save({id: '111', name: 'Valid Name'})
    const validUser = await sut.findOne({name: 'Valid Name'})
    expect(validUser).toMatchObject({name: 'Valid Name'})
    const {id} = validUser
    expect(id).toBe('111')
    await sut.update(id, {name: 'Updated Name'})
    const changedUser = await sut.findOne({name: 'Updated Name'})
    expect(changedUser).toMatchObject({name: 'Updated Name'})
  })
})
