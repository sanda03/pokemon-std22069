import { doGetRequest } from "./api";

export const API_URL = "https://pokeapi.co/api/v2/pokemon";
export const POKEMON_PER_PAGE = 50;

export type Pokemon = {
  id: string,
  name: string,
  weight: string,
  image: string,
  height: number,
  order: number
}

export type MiniPokemonInfo = {
  id: string,
  name: string,
  url: string
}

function getIdFromUrl(url: string) {
  const pathUrl = url.slice(0, url.length - 1);
  return pathUrl.slice(pathUrl.lastIndexOf("/") + 1, pathUrl.length);
}

function listToPokemons(responses: { results: MiniPokemonInfo[] }) {
  return responses.results.map(pokemon => {
    const { url, name } = pokemon;
    return {
      name,
      url,
      id: getIdFromUrl(url)
    }
  })
}

function oneToPokemon(id: string, responses: any): Pokemon {
  return ({
    id,
    name: responses.name,
    image: responses.sprites.front_default,
    height: responses.height,
    weight: responses.weight,
    order: responses.order,
  });
}

export async function getPokemonList(page: number): Promise<MiniPokemonInfo[]> {
  const url = `${API_URL}?offset=${page * POKEMON_PER_PAGE}&limit=${POKEMON_PER_PAGE}`;
  return await doGetRequest<MiniPokemonInfo[]>(url, listToPokemons);
}

export async function getOnePokemon(id: string) {
  const url = `${API_URL}/${id}/`;
  return await doGetRequest<Pokemon>(url, responses => oneToPokemon(id, responses));
}
