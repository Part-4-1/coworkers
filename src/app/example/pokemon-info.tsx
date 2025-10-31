"use client";

import { useQuery } from "@tanstack/react-query";

const PokemonInfo = () => {
  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
      return response.json();
    },
  });

  return <div>{data.name}</div>;
};

export default PokemonInfo;
