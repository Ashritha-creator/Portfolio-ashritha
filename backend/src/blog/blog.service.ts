import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  create(data: { title: string; content: string }) {
    return this.prisma.blog.create({ data });
  }

  findAll() {
    return this.prisma.blog.findMany();
  }
}
