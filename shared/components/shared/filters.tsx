'use client';

import React from 'react'
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

  return (
    <div className={ cn('', className) }>
        <Title text="Фильтрация" size='sm' className='mb-5 font-bold'/>

        {/* Верхние чекбоксы */}
        <CheckboxFilterGroup
            title='Размеры'
            name='sizes'
            className='mb-5'
            items={[
                { text: '25 см', value: '25'},
                { text: '30 см', value: '30'},
                { text: '40 см', value: '40'},
            ]}
            onClickCheckbox={filters.setSizes}
            selectedValues={filters.sizes}
        />

        <CheckboxFilterGroup
            title='Тип теста'
            name='pizzaTypes'
            className='mb-5'
            items={[
                { text: 'Традиционное', value: '1'},
                { text: 'Тонкое', value: '2'},
            ]}
            onClickCheckbox={filters.setPizzaTypes}
            selectedValues={filters.pizzaTypes}
        />

        {/* Фильтр цен */}
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className='flex gap-3 mb-5'>
                <Input
                    step={25}
                    type="number" 
                    placeholder="0" 
                    min="0" 
                    max="5500" 
                    value={String(filters.prices.priceFrom)}
                    onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                />
                <Input
                    step={25}
                    type="number" 
                    placeholder="1000" 
                    min="100" 
                    max="5500" 
                    value={String(filters.prices.priceTo)}
                    onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                />
            </div>
            <RangeSlider 
                min={0} 
                max={5500} 
                step={25} 
                value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 5500]} 
                onValueChange={updatePrices}
            />
        </div>

        {/* Фильтр ингредиентов */}
        <CheckboxFilterGroup 
            title='Ингредиенты'
            name='ingredients'
            className='mt-5'
            limit={6}
            defaultItems={items.slice(0, 6)}
            items={items}
            loading={loading}
            onClickCheckbox={filters.setIngredients}
            selectedValues={filters.ingredients}
        />
    </div>
  )
}
