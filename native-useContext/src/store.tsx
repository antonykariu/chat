import React, { createContext, useContext, useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

function usePokemonSource(): { pokemon: Pokemon[] } {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);
  return { pokemon };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }: {children: React.ReactNode}) {
    return (
      <PokemonContext.Provider value={usePokemonSource()}>
        {children}
      </PokemonContext.Provider>
    );
  }