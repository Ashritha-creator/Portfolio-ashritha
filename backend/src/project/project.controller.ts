import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  createProject(@Body() body: { title: string; description: string; link: string }) {
    return this.projectService.create(body);
  }

  @Get()
  getAllProjects() {
    return this.projectService.findAll();
  }
}

@Delete(':id')
async remove(@Param('id') id: string) {
  return this.projectsService.remove(+id);
}
