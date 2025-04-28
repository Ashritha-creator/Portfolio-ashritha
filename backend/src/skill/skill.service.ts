import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  create(data: { name: string }) {
    return this.prisma.skill.create({ data });
  }

  findAll() {
    return this.prisma.skill.findMany();
  }
}
