import Image from "next/image";
import { Pokemon } from "@/utils/pokemon-api";
import Link from "next/link";

function SimpleInfo({ label, value }: { label: string, value: string }) {
  return (
    <p className="font-bold text-[14px]">
      {label}:
      <span className="ml-5 text-orange-500">
        {value}
      </span>
    </p>
  )
}

export function PokemonShow({ pokemon, type }: { pokemon: Pokemon, type: "client" | "server" }) {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      <Image src={pokemon.image} alt={pokemon.name} width={150} height={150} className="block" />
      <div className="mb-2">
        <SimpleInfo label="id" value={pokemon.id} />
        <SimpleInfo label="Nom" value={pokemon.name} />
        <SimpleInfo label="Taille" value={pokemon.height.toString()} />
        <SimpleInfo label="Poids" value={pokemon.weight} />
        <SimpleInfo label="Ordre" value={pokemon.order.toString()} />
      </div>
      <Link href={`/${type}`}>
        <button className="bg-gray-400 px-[10px] py-[5px] text-black">
          List
        </button>
      </Link>
    </div>
  )
}
