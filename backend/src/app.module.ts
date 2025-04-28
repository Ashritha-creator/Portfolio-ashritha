import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { SkillController } from './skill/skill.controller';
import { SkillService } from './skill/skill.service';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [ProjectController, SkillController, BlogController],
  providers: [ProjectService, SkillService, BlogService, PrismaService],
})
export class AppModule {}
