import type {ApiRecipe} from "~/types/api/apiRecipe";

export interface ApiRecipeData {
    recipes: Array<ApiRecipe>;
    total: number;
    skip: number;
    limit: number;
}