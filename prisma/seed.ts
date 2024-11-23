import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";

export const generateProductItem = ({
    productId,
    pizzaType,
    price,
    size,
  } : {
    productId: number;
    price: number;
    pizzaType?: 1 | 2;
    size?: 25 | 30 | 40;
  }) => {
    return {
      productId,
      price,
      pizzaType,
      size,
    } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      { 
          fullName: 'User Test',
          email: 'user@test.ru',
          password: hashSync('111111', 10),
          verified: new Date(),
          role: 'USER',
      },
      {
          fullName: 'Admin Admin',
          email: 'admin@test.ru',
          password: hashSync('111111', 10),
          verified: new Date(),
          role: 'ADMIN',
      }
    ]    
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });
  
  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });  
    
  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });    
    
  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      description: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });
 
  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 25, price: 400 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30, price: 100 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40, price: 100 }),

      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 25, price: 100 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30, price: 100 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40, price: 100 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 25, price: 100 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30, price: 100 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40, price: 100 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 25, price: 100 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30, price: 100 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40, price: 100 }),

      // Остальные продукты
      generateProductItem({ productId: 1, price: 100 }),
      generateProductItem({ productId: 2, price: 100 }),
      generateProductItem({ productId: 3, price: 100 }),
      generateProductItem({ productId: 4, price: 100 }),
      generateProductItem({ productId: 5, price: 100 }),
      generateProductItem({ productId: 6, price: 100 }),
      generateProductItem({ productId: 7, price: 100 }),
      generateProductItem({ productId: 8, price: 100 }),
      generateProductItem({ productId: 9, price: 100 }),
      generateProductItem({ productId: 10, price: 100 }),
      generateProductItem({ productId: 11, price: 100 }),
      generateProductItem({ productId: 12, price: 100 }),
      generateProductItem({ productId: 13, price: 100 }),
      generateProductItem({ productId: 14, price: 100 }),
      generateProductItem({ productId: 15, price: 100 }),
      generateProductItem({ productId: 16, price: 100 }),
      generateProductItem({ productId: 18, price: 100 }),
      generateProductItem({ productId: 19, price: 100 }),
      generateProductItem({ productId: 21, price: 100 }),
      generateProductItem({ productId: 22, price: 100 }),
      generateProductItem({ productId: 23, price: 100 }),
      generateProductItem({ productId: 24, price: 100 }),
      generateProductItem({ productId: 25, price: 100 }),
      generateProductItem({ productId: 26, price: 100 }),
      generateProductItem({ productId: 27, price: 100 }),
      generateProductItem({ productId: 28, price: 100 }),
      generateProductItem({ productId: 29, price: 100 }),
      generateProductItem({ productId: 31, price: 100 }),
      generateProductItem({ productId: 32, price: 100 }),
      generateProductItem({ productId: 33, price: 100 }),
      generateProductItem({ productId: 34, price: 100 }),
      generateProductItem({ productId: 35, price: 100 }),
      generateProductItem({ productId: 36, price: 100 }),
      generateProductItem({ productId: 37, price: 100 }),
      generateProductItem({ productId: 38, price: 100 }),
      generateProductItem({ productId: 39, price: 100 }),
      generateProductItem({ productId: 40, price: 100 }),
      generateProductItem({ productId: 41, price: 100 }),
      generateProductItem({ productId: 42, price: 100 }),
      generateProductItem({ productId: 43, price: 100 }),
      generateProductItem({ productId: 44, price: 100 }),
      generateProductItem({ productId: 45, price: 100 }),
      generateProductItem({ productId: 46, price: 100 }),
      generateProductItem({ productId: 47, price: 100 }),
      generateProductItem({ productId: 48, price: 100 }),
      generateProductItem({ productId: 49, price: 100 }),
      generateProductItem({ productId: 50, price: 100 }),
      generateProductItem({ productId: 51, price: 100 }),
      generateProductItem({ productId: 52, price: 100 }),
      generateProductItem({ productId: 53, price: 100 }),
      generateProductItem({ productId: 54, price: 100 }),
      generateProductItem({ productId: 55, price: 100 }),
      generateProductItem({ productId: 56, price: 100 }),
      generateProductItem({ productId: 57, price: 100 }),
      generateProductItem({ productId: 58, price: 100 }),
      generateProductItem({ productId: 59, price: 100 }),
      generateProductItem({ productId: 60, price: 100 }),
      generateProductItem({ productId: 61, price: 100 }),
      generateProductItem({ productId: 62, price: 100 }),
      generateProductItem({ productId: 63, price: 100 }),
      generateProductItem({ productId: 64, price: 100 }),
      generateProductItem({ productId: 65, price: 100 }),
      generateProductItem({ productId: 66, price: 100 }),
      generateProductItem({ productId: 67, price: 100 }),
      generateProductItem({ productId: 68, price: 100 }),
      generateProductItem({ productId: 69, price: 100 }),
      generateProductItem({ productId: 70, price: 100 }),
      generateProductItem({ productId: 71, price: 100 }),
      generateProductItem({ productId: 72, price: 100 }),
      generateProductItem({ productId: 73, price: 100 }),
      generateProductItem({ productId: 74, price: 100 }),
      generateProductItem({ productId: 75, price: 100 }),
      generateProductItem({ productId: 76, price: 100 }),
      generateProductItem({ productId: 77, price: 100 }),
      generateProductItem({ productId: 78, price: 100 }),
      generateProductItem({ productId: 79, price: 100 }),
      generateProductItem({ productId: 80, price: 100 }),
      generateProductItem({ productId: 81, price: 100 }),
      generateProductItem({ productId: 82, price: 100 }),
    ],
  });    

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });    

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });