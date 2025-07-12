// src/users/users.controller.ts

import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('seed-admin')
  async seedAdmin() {
    const existing = await this.usersService.findByEmail('admin@mail.com');
    if (existing) {
      return { message: 'Admin user already exists' };
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const newUser = await this.usersService.create({
      name: 'Admin',
      email: 'admin@mail.com',
      password: hashedPassword,
      role: 'admin',
    });

    return {
      message: 'Admin user created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    };
  }
}
