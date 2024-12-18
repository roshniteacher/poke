"use client";
import { useEffect, useState } from "react";
import SearchBox from "./SearchForm";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import PokemonResults from "./model/PokemonProps";
import PokemonDetails from "./model/PokemonDetailsProps";
import PokemonCardPreview from "./PokemonCardPreview";
import { fetchPokemonByName } from "./api/actions";

export default function Home() {
  const [pokemonresults, setPokemonResults] = useState<
    PokemonResults[] | undefined
  >([]);
  const [offset , setOffset] = useState(0);
  const load = 
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectQuery, setSelectQuery] = useState<string>("-1");
  const fetchPokemons = (): any => {
    axios
      .get(load)
      .then((response: any) => {
        setPokemonResults(response.data.results);
      })
  };
  const handleSearch = () => {
    if (searchQuery != "" && pokemonresults) {
      setPokemonResults(
        pokemonresults.filter((item) => item.name.includes(searchQuery))
      );
      // setSearchQuery("");
    }
  };

  const handleViewMore = () => {
    fetchPokemons();
  };
  useEffect(() => {
    searchQuery == "" && fetchPokemons();
  }, [searchQuery , offset]);
  return (
    <>
      <SearchBox
        searchQuery={searchQuery}
        selectQuery={selectQuery}
        setSearchQuery={setSearchQuery}
        setSelectQuery={setSelectQuery}
        handleSearch={handleSearch}
      />
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-center">
          {pokemonresults &&
            pokemonresults.map((child: PokemonResults, index: number) => (
              <PokemonCardPreview key={index} pokemon={child.name} />
            ))}
        </div>
        <button
          className="relative inline-flex items-center justify-center 
      p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
      focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    
    onClick={()=>{setOffset(offset + 20); handleViewMore();}}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get More Pokemons
          </span>
        </button>
      </div>
    </>
  );
}
