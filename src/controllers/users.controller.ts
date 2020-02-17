import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
