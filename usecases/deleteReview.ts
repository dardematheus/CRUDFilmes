import prisma from '../models/prismaClient.ts';

export async function deleteReview(id: number) {
    const deletedReview = await prisma.review.delete({
        where: {
            id: id
        },
    });
    return deletedReview;
}