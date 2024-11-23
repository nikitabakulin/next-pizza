import { calcTax } from ".";
import { DELIVERY_PRICE } from "../constants";
import { CartItemDTO } from "../services/dto/cart.dto";
import { calcCart } from "./calc-checkout-cart-total-price";

export function calcTotalPrice(items : CartItemDTO[]) : number{
    return calcCart(items) + calcTax(items) + DELIVERY_PRICE;
}