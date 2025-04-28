import { Controller, Post, Body, Get } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  createSkill(@Body() body: { name: string }) {
    return this.skillService.create(body);
  }

  @Get()
  getAllSkills() {
    return this.skillService.findAll();
  }
}
