import { Injectable } from '@nestjs/common';
import { type } from 'os';

export type User = {
    id: number
    name: string
    username: string
    password: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Udam',
            username: 'udam',
            password: 'udam'
        },
        {
            id: 2,
            name: 'Dara',
            username: 'dara',
            password: 'dara'
        },
        {
            id: 3,
            name: 'Yuth',
            username: 'yuth',
            password: 'yuth'
        }
    ]

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }






}
