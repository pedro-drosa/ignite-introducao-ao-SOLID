import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ user_id }: IRequest): User[] {
    const { email, admin } = this.usersRepository.findById(user_id);
    if (!email || !admin) throw new Error("user not found");
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
