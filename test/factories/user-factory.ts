import bcrypt from 'bcrypt';
import prisma from '../../src/config/database';
import { faker } from "@faker-js/faker"

export async function createUser(params): Promise<any> {
    const incomingPassword = params.password || faker.internet.password(6);
    const hashedPassword = await bcrypt.hash(incomingPassword, 10);

    return prisma.users.create({
        data: {
            email: params.email || faker.internet.email(),
            password: hashedPassword,
            name: faker.person.fullName(),
            photo: faker.internet.url()
        },
    });
}
