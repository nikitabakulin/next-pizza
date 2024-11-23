'use client';

import React from 'react'
import { useIntersection } from 'react-use';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
    title: string;
    items: ProductWithRelations[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ 
    title,
    items,
    categoryId,
    className,
    listClassName,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    
    // Хранение состояния для отслеживания текущего выбранного элемента
    const intersectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    // Конфигурация для IntersectionObserver
    const observer = React.useRef<IntersectionObserver | null>(null);

    // Когда компоненты монтируются, создаем наблюдатель
    React.useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Если элемент виден, обновляем выбранный ID
                    setActiveCategoryId(categoryId);
                }
            });
        }, { threshold: 0.4 }); // Параметр это настраиваемый порог

        // Подписываемся на изменения видимости для каждого элемента
        if (intersectionRefs.current) {
            intersectionRefs.current.forEach(ref => {
                if (ref) {
                    observer.current?.observe(ref);
                }
            });
        }

        // Убираем наблюдателя при размонтировании
        return () => {
            if (observer.current) {
                intersectionRefs.current.forEach(ref => {
                    if (ref) {
                        observer.current?.unobserve(ref);
                    }
                });
            }
        };
    }, [items, setActiveCategoryId]);

    return (
        <div className={ cn('h-full scroll-m-[110px]', className) } id={title} >
            <Title text={title} size="lg" className='font-extrabold mb-5'/>

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    [...items].reverse().map((product, i) => (
                        <div className='flex flex-col h-full' key={product.id} ref={(el) => {intersectionRefs.current[i] = el}}>
                            <ProductCard
                                product={product}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
