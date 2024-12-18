interface PokemonDetails {
   id:number;
   name:string;
   types:type[];
   stats:stat[];
   abilities:ability[];
   moves:move[];
   sprites:sprite;
  }
  type stat = {
    stat:statObj;
  }
  type statObj = {
    name:string;
  }
 type type = {
    type:typeObj;
  }
  type typeObj = {
    name:string;
  }
  type ability = {
    ability:abilityObj;
  }
  type abilityObj = {
    name:string;
  }
  type move = {
    move:moveObj;
  }
  type moveObj = {
    name:string;
  }
  type sprite = {
    back_default:string;
  }
  export default PokemonDetails;
  