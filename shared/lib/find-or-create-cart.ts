import { prisma } from "@/prisma/prisma-client"

export const findOrCreateCart = async (token: string) => {
    let userCart = await prisma.cart.findFirst({
        where: {
            token,
        },
    });

    if (!userCart) {
        userCart = await prisma.cart.create({
            data: {
                token,
            },
        });
    }

    return userCart;
}

export const findOrCreateCartForUser = async (userId: number, token: string) => {
    let userCart = await prisma.cart.findFirst({
        where: {
            userId,
        },
    });

    if (!userCart) {
        userCart = await prisma.cart.create({
            data: {
                userId: userId,
                totalAmount: 0,
                token,
            },
        });
    }

    return userCart;
}