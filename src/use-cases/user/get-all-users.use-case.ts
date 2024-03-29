import { UseCase } from '@/core/base/use-case';
import { CreatedUserMapper } from '@/core/domain/mappers';
import { UserRepository } from '@/core/repositories';
import { CreatedUserDto } from '@/shared/dtos/user';

export class GetAllUsersUseCase implements UseCase<CreatedUserDto[]> {
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UserRepository) {
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(): Promise<CreatedUserDto[]> {
    const users = await this.repository.getAll();
    return users.map((user) => this.createdUserMapper.mapTo(user));
  }
}
