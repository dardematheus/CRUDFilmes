import prisma from '../models/prismaClient.ts';

export async function getReview(id: number, user: string, movie: string) {
    const review = await prisma.review.findMany({
        where: {
            id: id,
            user: {
                name: user
            },
            movie: {
                title: movie
            }
        }
    })
    return review;
}