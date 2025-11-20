import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  email: string;
  name: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(name: string, email: string): User {
    const newUser: User = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }
}