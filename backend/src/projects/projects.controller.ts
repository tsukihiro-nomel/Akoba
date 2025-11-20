import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ProjectsService, ProjectStatus } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  /** GET /projects */
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  /** GET /projects/:id */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(Number(id));
  }

  /** POST /projects */
  @Post()
  create(
    @Body() body: { title: string; description: string; clientId: number }
  ) {
    return this.projectsService.create(body.title, body.description, body.clientId);
  }

  /** PATCH /projects/:id/status */
  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: ProjectStatus }
  ) {
    return this.projectsService.updateStatus(Number(id), body.status);
  }
}