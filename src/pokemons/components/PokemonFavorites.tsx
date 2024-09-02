"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorites = () => {
  const favoritesPokemons = useAppSelector((store) =>
    Object.values(store.pokemons.favorites)
  );
  /* const [pokemons, setPokemons] = useState(favoritesPokemons);

  useEffect(() => {
    setPokemons(favoritesPokemons);
  }, [favoritesPokemons]);
 */
  return (
    <>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritesPokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
