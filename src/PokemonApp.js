import React, { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './Api';
import { Pokedex } from './components/Pokedex';

export const PokemonApp = () => {
	const [pokemons, setPokemons] = useState([]);

	const fetchPokemon = async () => {
		try {
			const data = await getPokemons();
			const promises = data.results.map(async (pokemon) => {
				return await getPokemonData(pokemon.url);
			});
			const results = await Promise.all(promises);
			setPokemons(results);
		} catch (error) {}
	};

	useEffect(() => {
		fetchPokemon();
	}, []);
	return (
		<div className="container">
			<Pokedex pokemons={pokemons} />
		</div>
	);
};

//*Componente padre de Pokedex y Pokemon
