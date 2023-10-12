import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Sepp', email: 'sepp@mail.de' };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Sepp',
        email: 'sepp@mail.de',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }

  @Post()
  createUser(@Body() userData: CreateUserDTO) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
