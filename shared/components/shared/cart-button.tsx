'use client';

import React from 'react'
import { cn } from '@/shared/lib/utils';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '../ui';
import { CartDrawer } from './cart-drawer';
import { useCartStore } from '@/shared/store';

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const totalAmount = useCartStore(state => state.totalAmount);
  const loading = useCartStore(state => state.loading);

  return (
    <CartDrawer>
      <Button loading={loading} className={cn('group relative', { 'w-[105px]' : loading }, className)}>
        <b>{totalAmount} ₽</b>

        <span className='h-full w-[1px] bg-white/30 mx-3'/>
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="h-4 w-4 relative" strokeWidth={2}/>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5"
        />  
        
        
      </Button>
    </CartDrawer>              
  )
};
