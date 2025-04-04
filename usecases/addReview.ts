import prisma from '../models/prismaClient.ts';

export async function addReview(comment: string, rating: number, movieTitle: string, username: string) {
    const user = await prisma.user.findUnique({
        where: { name: username },
    });

    const movie = await prisma.movie.findUnique({
        where: { title: movieTitle },
    });

    const newReview = await prisma.review.create({
        data: {
            comment: comment,
            rating: rating,
            userId: user.id,
            movieId: movie.id,
        },
    });
    return newReview;
}