import {usePokemon, PokemonProvider } from "./store";

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.url}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <PokemonProvider>
      <PokemonList />
    </PokemonProvider>
  );
}

export default App;
