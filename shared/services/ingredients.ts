import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> =>
    (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;