import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id }});
    }

    async update(id: number, data: Prisma.UserUpdateInput) {
        return this.prisma.user.update({ where: { id }, data });
    }

    async delete(id: number) {
        return this.prisma.user.delete({ where: { id }});
    }

}
