import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";


export const localStorageMiddleware: Middleware =
  (state) => (next) => (action) => {
    next(action);

    if ((action as { type: string }).type === "pokemons/toggleFavorite") {
        const { pokemons } = state.getState();
        localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
        return;
      }
  };
