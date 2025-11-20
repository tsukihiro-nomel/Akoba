import { Injectable } from '@nestjs/common';

export type ProjectStatus = 'nouveau' | 'en attente' | 'en production' | 'en validation' | 'terminé';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  clientId: number;
}

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];
  private nextId = 1;

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }

  create(title: string, description: string, clientId: number): Project {
    const project: Project = {
      id: this.nextId++,
      title,
      description,
      clientId,
      status: 'nouveau'
    };
    this.projects.push(project);
    return project;
  }

  updateStatus(id: number, status: ProjectStatus): Project | undefined {
    const proj = this.findOne(id);
    if (proj) {
      proj.status = status;
    }
    return proj;
  }
}