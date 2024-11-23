import { VAT } from "../constants"
import { CartItemDTO } from "../services/dto/cart.dto";
import { calcCart } from "./calc-checkout-cart-total-price";

export function calcTax(items: CartItemDTO[]) : number {
    const tax = Math.floor((calcCart(items) * VAT) / 100);
    return tax;
}