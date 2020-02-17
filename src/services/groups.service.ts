import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    return this.groupsRepository.find();
  }

  findOne(id: string): Promise<Group> {
    return this.groupsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.groupsRepository.delete(id);
  }
}