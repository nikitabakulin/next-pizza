import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  description?: string;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ 
    name,
    imageUrl,
    price,
    onSubmit,
    className,
    description,
    loading, 
}) => {
    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[500px] h-[500px]"
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7 flex flex-col h-full">
                <Title text={name} size="md" className="font-extrabold mb-1" />
                <p className='text-gray-900 mt-2 flex-grow'>{description}</p>
                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-auto">
                    В корзину за {price} ₽
                </Button>
            </div>
        </div>
    );
};
