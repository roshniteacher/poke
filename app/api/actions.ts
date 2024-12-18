"use server";

import axios from "axios";

export const fetchPokemonByName = async (name: string) => {
  try {
    return axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => {
        return response.data;
      });
  } catch {
    throw new Error("pokemon request failed");
  }
};

