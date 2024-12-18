import React from 'react'
import PokemonDetails from "./model/PokemonDetailsProps";


const PokemonCard = ({pokemon}:{pokemon : PokemonDetails}) => {
    const { name,types, sprites,stats, abilities, moves } = pokemon;
    const type = types[0].type.name;
    const image = sprites.back_default;
  
    return (
      <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg basis-1/4 m-4">
        <div style={{backgroundColor:"green"}}>
          <img
          className=""
          src={image}
          alt="Sunset in the mountains"
          style={{ width: "320px", height: "132px" }}
        /></div>
        <div style={{backgroundColor:"orange"}}>
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2">
             { name.toLocaleUpperCase()}
          </div>
          <div className="font-bold text-xl mb-2">Type: {type.toLocaleUpperCase()}</div>
        </div>
        <div className="px-4 pt-2 pb-2">
         Abilities:{abilities.map((x , index) => <span className="" key ={index +x.ability.name}>{x.ability.name} {index !=abilities.length - 1 && <>,</>} </span>)}
        </div>
        <div className="px-4 pt-2 pb-2">
         Stats: {stats.slice(0,3).map((x , index) => <span className="" key ={index +x.stat.name}>{x.stat.name} {index !=2 && <>,</>} </span>)}
        </div>
        <div className="px-4 pt-2 pb-2">
         Moves: {moves.slice(0,3).map((x , index) => <span className="" key ={index +x.move.name}>{x.move.name} {index !=2 && <>,</>}</span>)}
        </div>
        </div>
        
      </div>
      </>
    
    );
}

export default PokemonCard