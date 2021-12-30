import React from 'react';

export const Navbar = () => {
	const urlimg =
		'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
	return (
		<div className="header">
			<div>
				<h2 className="titulo">Pokedex</h2>
			</div>
			<div>
				<img src={urlimg} className="imgpoke" alt="imagen pokemon" />
			</div>
		</div>
	);
};
