import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { CreateUserDTO } from "src/users/dtos/CreateUser.dto";
import { UsersService } from "src/users/services/users/users.service";

@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Get("posts")
    getUsersPosts() {
        return [
            {
                username: "Sepp",
                email: "sepp@mail.de",
                posts: [
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" },
                ],
            },
        ];
    }

    @Get("posts/comments")
    getUsersPostsComments() {
        return [
            {
                id: 1,
                title: "Post 1",
                comments: [],
            },
        ];
    }

    @Post("create")
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDTO) {
        console.log(userData);
        return this.userService.createUser(userData);
    }

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number) {
        return this.userService.fetchUserById(id);
    }
}
