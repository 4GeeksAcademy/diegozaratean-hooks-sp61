import React, { useState } from "react";

const Home = () => {

	const [numero, setNumero] = useState(1)
	const [clicks, setClicks] = useState(0)

	function increase(){
		setNumero(numero + 1) 
		setClicks(clicks + 1)
	}

	function decrease(){
		setNumero(numero - 1) 
		setClicks(clicks + 1)
	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Bienvenidos a React Hooks !</h1>
			<button onClick={decrease}>Quitar</button>
			<p>{numero}</p>
			<button onClick={increase}>Agregar</button>
			<p>me has usado {clicks} veces</p>
		</div>
	);
};

export default Home;
