import prisma from '../models/prismaClient.ts';

export async function getUser(username: string) {
    const getUser = await prisma.user.findUnique({
        where: {
            name: username
        }, include: {
            reviews: true
        }, omit: {
            password: true
        },
    });
    return getUser;
}