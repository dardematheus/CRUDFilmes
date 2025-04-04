import prisma from '../models/prismaClient.ts'

export async function addUser(username: string, password: string) {
    const userExists = await prisma.user.findUnique({
        where: {
            name: username
        },
    });

    if (userExists) {
        throw new Error('User already exists');
    }

    const newUser = await prisma.user.create({
        data: {
            name: username,
            password: password
        },
    });
    return newUser;
}