import React from 'react';

export const Pokemon = (props) => {
	const { pokemon } = props;
	const style = pokemon.types[0].type.name;
	return (
		<div className={style}>
			<div className="pokemon-card">
				<div className="number">#{pokemon.id}</div>
				<div className="pokemon-img-container">
					<img
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
						className="pokemon-img"
					/>
				</div>
				<div className="card-body">
					<div className="card-top">
						<h3>{pokemon.name}</h3>
					</div>
					<div className="card-bottom">
						<div>
							{pokemon.types.map((type, i) => {
								return <div key={i}>{type.type.name}</div>;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

//*Componente hijo de pokedex
