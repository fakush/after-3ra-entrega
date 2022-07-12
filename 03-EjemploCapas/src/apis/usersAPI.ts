import Users from '../models/users'

class UsersAPI {
  async getUserByEmail(user: any) {
    return await Users.getUserByEmail(user)
  }

  async postUser(user: any) {
    return await Users.postUser(user)
  }

  async updateUser(user: any) {
    return await Users.updateUser(user)
  }

  async validateUserPassword(user: any, password: string) {
    return await Users.validateUserPassword(user, password)
  }
}

const usersAPI = new UsersAPI()
export default usersAPI
