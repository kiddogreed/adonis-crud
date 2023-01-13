import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TestUser from 'App/Models/TestUser'

export default class CrudsController {
  public async index({response}: HttpContextContract) {

    try {
      const user = await TestUser.all()
    console.log(user);
    return 1
    } catch (error) {
      console.log(error);
      
      return response.notFound({
        "message":"Request Not found"
      })
    }
    
    

  }

  // public async create({}: HttpContextContract) {

  // }

  public async store({request,response}: HttpContextContract) {
    const inputName = request.input('name')
    const inputAge = request.input('age')

    if (!inputName || !inputAge) {
      return response.badRequest({
        "message":"Invalid request"
      })
    }

    
    const created = await TestUser.create({
      name: inputName,
      age: inputAge
    
      })
      return response.created({
        message: 'User  Accepted',
          data: {
            id:created.id,
            name: created.name,
            age: created.age,
            created: created.createdAt}
          })
    
  //   try {
      
  
  //     const created = await TestUser.create({
  //     name: inputName,
  //     age: inputAge
    
  //     })
  //     return response.created({
  //       message: 'User  Accepted',
  //         data: {
  //           id:created.id,
  //           name: created.name,
  //           age: created.age,
  //           created: created.createdAt}
  //         })
    
  // } catch (error) {
  //   console.log(error);
    
  //   return response.badRequest({
  //     "message":"Invalid request"
  //   })
  }
 
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
