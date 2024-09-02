import { PokemonFavorites } from "@/pokemons/components/PokemonFavorites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, blanditiis asperiores. Sapiente molestias illum commodi autem, rerum, sint voluptatibus consequatur labore excepturi quo quasi voluptas? Veritatis neque dolor quisquam ullam.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonFavorites />
    </div>
  );
}
