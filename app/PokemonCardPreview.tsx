import React, { useState } from "react";
import Link from "next/link";
import PokemonDetails from "./model/PokemonDetailsProps";
import axios from "axios";

const  PokemonCardPreview = ({
  pokemon,
}: {
  pokemon: string;
}) => {
  const [pokeItem , SetPokeItem] = useState<PokemonDetails | undefined>();
  const fetchSpriteForPokemon =  () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then((response) => {
        SetPokeItem(response.data);
      });
      return  pokeItem ? pokeItem.sprites.back_default : undefined;
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg basis-1/4 m-4 ">
      <img
        className="w-full"
        src={fetchSpriteForPokemon()}
        style={{ width: "120px", height: "132px", margin:"0 auto" }}
      />
      <div style={{backgroundColor : "#f7f7f7"}} className="p-6">
      <div className="mb-12">{pokemon}</div>
      <Link  className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href={`/pokemon/${pokemon}`}>Details...</Link>
      </div>
      
    </div>
  );
};

export default PokemonCardPreview;
