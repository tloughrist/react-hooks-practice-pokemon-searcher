import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

let pokeDisplayArr = [];

function PokemonCollection(props) {

  props.isLoaded ? pokeDisplayArr = createPokeCards() : pokeDisplayArr = <h2>Pokemon are on their way...</h2>;

  function createPokeCards() {
    const searchedArr = props.searchValue === undefined ? props.pokeData : pokeSearchFilter();
    return searchedArr.map((pokemon) => {
      return <PokemonCard key={pokemon.name} name={pokemon.name} hp={pokemon.hp} frontSprite={pokemon.sprites.front} backSprite={pokemon.sprites.back} />
    })
  }

  function pokeSearchFilter() {
    return props.pokeData.filter((pokemon) => {
      return pokemon.name.includes(props.searchValue.toLowerCase());
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      {pokeDisplayArr}
    </Card.Group>
  );
}

export default PokemonCollection;
