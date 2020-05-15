function buscaPuchamon() {
var imagen_pokemon        =   document.getElementById("imagenpokemon");
var nombrePokemon         =   document.getElementById("nombrePokemon").value;
var habilidadesPokemon    =  document.getElementById("habilidadesPokemon");
var tipoCambio    =  document.getElementById("tipoCambio");
var tipo   =  document.getElementById("tipo");
var buttomSearch = document.getElementById("mePona");


nombrePokemon  = nombrePokemon.toLowerCase();


fetch('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon+'/')
  .then(function(response) {
    return response.json();
  })
  .then(function(neko) {
/*     console.log(neko.abilities['0'].ability.name);
    console.log(neko.abilities['1'].ability.name);
    console.log(neko.sprites.front_default);
    console.log(neko.forms['0'].name);
    console.log(neko.types['0'].type.name);
 */
    imagen_pokemon.src = neko.sprites.front_default;
    mePona.innerHTML=' <p> Nombre: '+neko.forms['0'].name+' </p> <hr>' ; 
    habilidadesPokemon.innerHTML=  ' <p> Habilidad 1: '+neko.abilities['0'].ability.name+' <br>Habilidad 2: '+neko.abilities['1'].ability.name+' </p>';
    
    

    var type = neko.types['0'].type.name;
    if(type == 'electric'){
      tipo.innerHTML='<b>Tipo: </b><span class="badge badge-warning">'+neko.types['0'].type.name+'</span>';
    }

   
    
    
    console.log(tipo);
    
  
  }); 
}


  
  
  
  
