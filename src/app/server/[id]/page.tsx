import { PokemonShow } from "@/components";
import { getOnePokemon } from "@/utils/pokemon-api";

export default async function ServerPokemonShow({ params: { id } }: { params: { id: string } }) {
  const pokemon = await getOnePokemon(id);

  return <div className="w-screen">
    <PokemonShow type="server" pokemon={pokemon} />
  </div>
}
