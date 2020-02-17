import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsService } from '../services/groups.service';
import { GroupsController } from '../controllers/groups.controller';
import { Group } from '../entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupsService],
  controllers: [GroupsController],
})
export class GroupsModule {}