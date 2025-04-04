import prisma from '../models/prismaClient.ts';

export async function getMovie(movieTitle: string) {
    const movie = await prisma.movie.findUnique({
        where: {
            title: `${movieTitle}`,
        },
    });
    return movie
}