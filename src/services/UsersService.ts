import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    //verifica se user existe
    const userExists = await this.usersRepository.findOne({
      email
    })
    //se existir apenas retorna
    if (userExists) {
      return userExists;
    }
    //else salva no BD
    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);
    return user;
  }
}

export { UsersService };