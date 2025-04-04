//Adds Movie to the DATABASE and returns ok response
import prisma from '../models/prismaClient.ts'

export async function addMovie(movieTitle: string) {
    const addMovie = await prisma.movie.create({
        data: {
            title: `${movieTitle}`,
        },
    });
    return addMovie;
}