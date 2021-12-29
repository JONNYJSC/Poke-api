export const searchPokemon = async (pokemon) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {}
};

export const getPokemons = async (limit = 20, offset = 0) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {}
};

export const getPokemonData = async (url) => {
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {}
};
