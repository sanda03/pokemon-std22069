"use client"

import { useEffect, useState } from "react"
import { PokemonShow } from "@/components"
import { Pokemon, getOnePokemon } from "@/utils/pokemon-api"

export default function ServerPokemonShow({ params: { id } }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    getOnePokemon(id)
      .then(response => {
        setPokemon(response);
      })
  }, [])

  if (!pokemon)
    return null;

  return <div className="w-screen">
    <PokemonShow type="client" pokemon={pokemon} />
  </div>
}
