import React from 'react';
import { Navbar } from './Navbar';
import { Pokemon } from './Pokemon';

export const Pokedex = (props) => {
	const { pokemons } = props;

	return (
		<>
			<Navbar />
			<div className="pokedex-grid container">
				{pokemons.map((pokemon) => {
					return <Pokemon pokemon={pokemon} key={pokemon.id} />;
				})}
			</div>
		</>
	);
};
//*Componente hijo de PokemonApp
//*Componente Padre de Pokemon
