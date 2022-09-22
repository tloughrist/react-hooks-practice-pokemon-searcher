import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeData, setPokeData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState();

  function fetchPokemon() {
    return (fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then((data) => setPokeData(data))
    .then(() => setIsLoaded(true))
    );
  };

  useEffect(() => {
    return fetchPokemon();
  }, []);

  function handleSearch(string) {
    return setSearchValue(string);
  };

  function handleAddPokemon(name, hp, spriteFront, spriteBack) {
    const pokeObj = {
      name: name,
      hp: hp,
      sprites: {
        front: spriteFront,
        back: spriteBack
      }
    };
     fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeObj),
    })
    .then(() => fetchPokemon())
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokeData={pokeData} isLoaded={isLoaded} searchValue={searchValue}/>
    </Container>
  );
}

export default PokemonPage;
