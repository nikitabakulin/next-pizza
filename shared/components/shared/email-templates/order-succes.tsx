import { ingredients } from '@/prisma/constants';
import { DELIVERY_PRICE } from '@/shared/constants';
import { calcTax, calcTotalPrice } from '@/shared/lib';

import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
    <div>
        <h1>Спасибо за покупку! 🎉</h1>

        <p>Ваш заказ #{orderId} оплачен. Список товаров:</p>

        <hr />

        <ul>
            {
                items.map((item) => (
                    <li key={item.id}>
                        {item.productItem.product.name} | {item.productItem.price} ₽ x {item.quantity} шт. = {item.productItem.price * item.quantity} ₽
                        {item.ingredients.map((ingredient) => (
                            <ul>
                                <li key={ingredient.id} value={'+'}>
                                    {ingredient.name} = {ingredient.price} ₽ 
                                </li>
                            </ul>
                        ))}
                    </li>
                ))
            }
        </ul>

        <hr />

        <ul>
            <li>Налог: {calcTax(items)}</li>
            <li>Доставка: {DELIVERY_PRICE}</li>
        </ul>

        <hr />

        <p>Итого: <b>{calcTotalPrice(items)} ₽</b></p>
    </div>
);