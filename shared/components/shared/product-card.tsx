import React from 'react'
import Link from 'next/link';
import { ProductWithRelations } from '@/@types/prisma';
import { Button, Title } from '..';

interface Props {
    product: ProductWithRelations;
}

export const ProductCard: React.FC<Props> = ({
    product,
}) => {
    return (
        <Link href={`/product/${product.id}`} className='flex flex-col h-full'>
            <div className='flex justify-center p-6 bg-secondary rounded-lg'>
                <img className='w-[215px] h-[215px]' src={product.imageUrl} alt={product.name} />
            </div>

            <Title text={product.name} size='sm' className='mb-1 mt-3 font-bold'/>

            <p className='text-sm to-gray-400 mb-4'>
                {product.description}
            </p>

            <div className='flex justify-between items-center mt-auto'>
                <span className='text-[20px]'>
                    {product.items.length > 1 && 'от '}<b>{product.items[0].price} ₽</b>
                </span>
                <Button className='w-[135px]' variant="secondary">
                    Выбрать
                </Button>
            </div>
        </Link>
    )
}

