import prisma from '../models/prismaClient.ts';

export async function getReview(id: number, user: string, movie: string) {
    const review = await prisma.review.findUnique({
        where: {
            id: id,
        },
    });
    return review;
}