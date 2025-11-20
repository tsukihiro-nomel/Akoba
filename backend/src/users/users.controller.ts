import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET /users
   * Returns a list of all users. In a real application, this would be restricted to admin.
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * GET /users/:id
   * Returns a single user by id.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  /**
   * POST /users
   * Creates a new user. For demonstration, accepts name and email in request body.
   */
  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body.name, body.email);
  }
}