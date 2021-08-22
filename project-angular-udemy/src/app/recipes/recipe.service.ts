import { Injectable } from "@angular/core";


import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()

export class RecipeService {
        
    private recipes: Recipe[] = [
    new Recipe(
        'Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!',
        'https://www.pequerecetas.com/wp-content/uploads/2021/01/wiener-schnitzel.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]), 
    new Recipe(
        'Big Fat Burger', 
        'What else you need to say', 'https://phantom-elmundo.unidadeditorial.es/64da650e7708b9f57253ec0350710714/crop/0x0/2044x1363/resize/746/f/jpg/assets/multimedia/imagenes/2021/04/16/16185660316390.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}