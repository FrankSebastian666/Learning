import { Injectable } from "@nestjs/common";
import { CreateUserType } from "src/utils/types";

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: "Sepp", email: "sepp@mail.de" },
        { username: "Depp", email: "depp@mail.de" },
        { username: "Pepp", email: "pepp@mail.de" },
    ];

    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userData: CreateUserType) {
        this.fakeUsers.push(userData);
        return;
    }

    fetchUserById(id: number) {
        return { id, username: "Sepp", email: "sepp@mail.de" };
    }
}
