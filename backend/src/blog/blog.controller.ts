import { Controller, Post, Body, Get } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  createBlog(@Body() body: { title: string; content: string }) {
    return this.blogService.create(body);
  }

  @Get()
  getAllBlogs() {
    return this.blogService.findAll();
  }
}
