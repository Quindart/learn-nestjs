import { Controller, Get, HttpCode, Post, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatController {
  constructor() { }
  @Get()
  getAll(): string {
    return 'hello';
  }
  @Get('red')
  getRedCat(): string {
    return 'red cat';
  }
  @Post()
  @HttpCode(201)
  createCat(): string {
    return 'new cat';
  }
  @Get('switch-dog')
  @Redirect('http://localhost:3000/dogs', 301)
  getSwitcher(): string {
    return 'switch';
  }
}
