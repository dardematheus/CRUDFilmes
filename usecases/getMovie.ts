import prisma from '../models/prismaClient.ts';

export async function getMovie(movieTitle: string) {
    const averageRating = await calcRating(movieTitle);

    await prisma.movie.update({
        where: {
            title: movieTitle
        },
        data: {
            rating: averageRating
        },
    });

    const movie = await prisma.movie.findUnique({
        where: {
            title: movieTitle,
        }, include: {
            reviews: {
                include: {
                    user: {
                        omit: {
                            password: true,
                        },
                    }
                },
            }
        },
    });
    return movie;
}

async function calcRating(movieTitle: string) {
    const movie = await prisma.movie.findUnique({
        where: {
            title: movieTitle
        },
    });
    
    const rating = await prisma.review.findMany({
        where: {
            movieId: movie.id
        }, select: {
            rating: true
        },
    });

    const ratingValues = rating.map(r => r.rating);
    const averageRating = ratingValues.reduce((sum, r) => sum + r, 0) / ratingValues.length;
    return averageRating;
}