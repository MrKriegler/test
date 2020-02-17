import { Controller, Get } from '@nestjs/common';
import { GroupsService } from '../services/groups.service';
import { Group } from 'src/entities/group.entity';

@Controller('groups')
export class GroupsController {
  constructor(private readonly usersService: GroupsService) {}

  @Get()
  async getUser(): Promise<Group[]> {
    return await this.usersService.findAll();
  }
}
