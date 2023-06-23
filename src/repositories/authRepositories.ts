import prisma from '../config/database'

async function findUserByEmail(email): Promise<any> {
    return prisma.users.findFirst({ where: { email } });
}

async function findUserById(id): Promise<any> {
    return prisma.users.findFirst({ where: { id } });
}


async function createUser(name, email, hashPass, image): Promise<any> {
    console.log(name, email, hashPass, image)
    const user = prisma.users.create({
        data: {
            name, email, password: hashPass, photo: image, gender: "Indefinido"
        }
    })
    return user
}

async function findAll(): Promise<any> {
    return prisma.users.findMany();
}

async function createSession({ userId, token }) {
    // prisma.patient_sessions.upsert({
    //     where: { userId },
    //     create: { userId, token },
    //     update: { token },
    //   })
}

export default {
    findUserByEmail, findUserById, createUser, findAll, createSession
}