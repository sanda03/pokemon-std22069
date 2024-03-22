import Image from "next/image";
import Link from "next/link";

import { Pokemon } from "@/utils/pokemon-api";

export function PokemonBaseItem({ type, pokemon }: { type: "client" | "server", pokemon: Pokemon }) {
  return (
    <div className="flex flex-col p-5 flex-wrap">
      <Image src={pokemon.image} alt={pokemon.name} width={150} height={150} className="block" />
      <h2 className="font-bold tex-white">{pokemon.name}</h2>
      <Link className="block bg-red-300 px-[10px] py-[5px] font-bold text-[14px] text-black" href={`${type}/${pokemon.id}`}>
        Details
      </Link>
    </div>
  )
}
