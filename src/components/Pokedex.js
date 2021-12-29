import React from 'react';
import { Pokemon } from './Pokemon';

export const Pokedex = (props) => {
	const { pokemons } = props;

	return (
		<div className="pokedex-grid container">
			{pokemons.map((pokemon) => {
				return <Pokemon pokemon={pokemon} key={pokemon.id} />;
			})}
		</div>
	);
};
//*Componente hijo de PokemonApp
//*Componente Padre de Pokemon
