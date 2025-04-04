import prisma from '../models/prismaClient.ts'

export async function deleteUser(username: string) {
    const deleteUser = await prisma.user.delete({
        where: {
            name: `${username}`
        },
    })
    return deleteUser
}