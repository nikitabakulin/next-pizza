'use client';

import { Dialog, DialogContent, DialogTitle} from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent 
        aria-describedby={undefined}
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden',
          className,
        )}>
        <DialogTitle hidden/>
        <ProductForm product={product} onSubmit={() => router.back()}/>
      </DialogContent>
    </Dialog>
  )
};
