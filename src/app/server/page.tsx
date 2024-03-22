import { PokemonServerItem } from "@/components";
import { getPokemonList } from "@/utils/pokemon-api";

export default async function ServerPokemonList() {
  const pokemons = await getPokemonList(0).catch(error => console.log(error));

  if (!pokemons)
    return null;

  return (
    <div className="conatiner mx-auto mt-5 flex flex-wrap gap-5">
      {pokemons.map(pokemon => <PokemonServerItem key={pokemon.id} id={pokemon.id} />)}
    </div>
  )
}
