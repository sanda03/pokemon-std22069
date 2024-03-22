"use client"

import { useEffect, useState } from "react"
import { MiniPokemonInfo, getPokemonList } from "@/utils/pokemon-api";
import { PokemonClientItem } from "@/components/pokemon-client-item";

export default function ClientPokemonList() {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<MiniPokemonInfo[]>([]);

  useEffect(() => {
    getPokemonList(page)
      .then(response => {
        setPokemons(response);
      })
  }, [page])

  const nextPage = () => {
    setPage(prev => prev + 1);
  }

  const prevPage = () => {
    setPage(prev => prev - 1);
  }

  return (
    <>
      <div className="flex gap-5 w-full mt-5 justify-center">
        <button className="block px-5 py-1 bg-red-500 rounded-[5px]" onClick={nextPage}>
          Next
        </button>
        {page > 0 &&
          <button className="block px-5 py-1 bg-red-500 rounded-[5px]" onClick={prevPage}>
            Prev
          </button>
        }
      </div>
      <div className="conatiner mx-auto mt-5 flex flex-wrap gap-5">
        {pokemons.map(pokemon => <PokemonClientItem key={pokemon.id} id={pokemon.id} />)}
      </div>
    </>
  )
}
