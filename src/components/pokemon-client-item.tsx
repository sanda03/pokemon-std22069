import { Pokemon, getOnePokemon } from "@/utils/pokemon-api";
import { useEffect, useState } from "react";
import { PokemonBaseItem } from "./pokemon-base-item";

export function PokemonClientItem({ id }: { id: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>();

  useEffect(() => {
    getOnePokemon(id)
      .then(pok => {
        setPokemon(pok);
      })
  }, [id])

  if (!pokemon)
    return null;

  return <PokemonBaseItem pokemon={pokemon} type="client" />
}
