import { calcCartItemTotalPrice } from ".";
import { CartItemDTO } from "../services/dto/cart.dto";

export function calcCart(items: CartItemDTO[]) : number {
    let totalPriceCart = 0;
    items.map((item) => {
        totalPriceCart += calcCartItemTotalPrice(item);
    });
    return totalPriceCart;
}