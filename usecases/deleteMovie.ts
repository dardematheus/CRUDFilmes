import prisma from '../models/prismaClient.ts';

export async function deleteMovie(movieTitle: string) {
    const movie = await prisma.movie.delete({
        where: {
            title: movieTitle
        },
    });
    return movie;
}