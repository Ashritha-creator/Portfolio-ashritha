import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  create(data: { title: string; description: string; link: string }) {
    return this.prisma.project.create({ data });
  }

  findAll() {
    return this.prisma.project.findMany();
  }
}
