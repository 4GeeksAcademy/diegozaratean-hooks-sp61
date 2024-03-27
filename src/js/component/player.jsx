import React, { useState } from "react";

const Player = () => {
    const [backBackground,setBackBackground] =useState('grey')
    const [playBackground,setplayBackground] =useState('grey')

    function back(){
        if(backBackground  == 'grey'){
            setBackBackground('green')
            setplayBackground('grey')
        }else{
            setBackBackground('grey')
        }
    }

    function play(){
        if(playBackground  == 'grey'){
            setplayBackground('green') // activando
            setBackBackground('grey')
        }else{
            setplayBackground('grey')
        }
    }

	return (
		<div className="text-center">
			
			<button onClick={back}  style={{ backgroundColor: backBackground }} >Anterior</button>
            <button onClick={play}  style={{ backgroundColor: playBackground }}>Reproducir</button>
            <button >Parar</button>
            <button >Siguiente</button>
		</div>
	);
};

export default Player;
