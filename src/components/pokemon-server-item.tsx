import { getOnePokemon } from "@/utils/pokemon-api";
import { PokemonBaseItem } from "./pokemon-base-item";

export async function PokemonServerItem({ id }: { id: string }) {
  const pokemon = await getOnePokemon(id).catch(error => console.log(error));
  
  if (!pokemon)
    return null;

  return <PokemonBaseItem pokemon={pokemon} type="server" />
}
