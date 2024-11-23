import { axiosInstance } from './instance';
import { CartDTO, CreateCartItemValues } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => 
    (await axiosInstance.get<CartDTO>('/cart')).data;

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => 
    (await axiosInstance.patch<CartDTO>('/cart/' + itemId, { quantity })).data;

export const removeCartItem = async (id: number): Promise<CartDTO> => 
    (await axiosInstance.delete<CartDTO>('/cart/' + id)).data;

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => 
    (await axiosInstance.post<CartDTO>('/cart', values)).data;