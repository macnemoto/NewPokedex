function buscaPuchamon() {
  var imagen_pokemon = document.getElementById("imagenpokemon");
  var nombrePokemon = document.getElementById("nombrePokemon").value;
  var habilidadesPokemon = document.getElementById("habilidadesPokemon");
  var tipo = document.getElementById("tipo");
  var tipo2 = document.getElementById("tipo2");



  nombrePokemon = nombrePokemon.toLowerCase();


  fetch('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon + '/')
    .then(function (response) {
      return response.json();
    })
    .then(function (neko) {
      /*     console.log(neko.abilities['0'].ability.name);
          console.log(neko.abilities['1'].ability.name);
          console.log(neko.sprites.front_default);
          console.log(neko.forms['0'].name);
          console.log(neko.types['0'].type.name);
       */

      imagen_pokemon.src = neko.sprites.front_default;
      mePona.innerHTML = ' <p> Nombre: ' + neko.forms['0'].name + ' </p> <hr>';
      /*
      habilidadesPokemon.innerHTML = ' <p> <b> Habilidad 1 :</b> ' + neko.abilities['0'].ability.name + ' <br> <b>Habilidad 2:</b> ' + neko.abilities['1'].ability.name + ' </p>';
*/


  
      var habilidadPruebaArray = neko.abilities;
      var all_habilidades = '';
      var iHabilidades    = 1;
      habilidadPruebaArray.forEach(obj => {
        all_habilidades += '<b>Habilidad: '+iHabilidades+' </b>'+obj.ability.name+'<br>' ;
        iHabilidades++;
       console.log(obj);
 
      });
    habilidadesPokemon.innerHTML = all_habilidades;


    


    var itypes    = 1;
      var typesArrayPokemon = neko.types;
      var all_types          = '';
      typesArrayPokemon.forEach(obj => {
        if (obj.type.name == 'electric') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-warning">' + obj.type.name + '</span><br>';
          itypes++;
        } else if (obj.type.name == 'normal') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-light">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'fire') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-danger">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'ice') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-info">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'grass') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-success">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'grass') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-success">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'dark') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-secondary">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'water') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-primary">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'ghost') {
          all_types += '<b>itypes++;Tipo'+itypes+': </b><span class="badge badge-fantama">' + obj.type.name + '</span><br>';

        } else if (obj.type.name == 'poison') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-poison">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'rock') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-rock">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'bug') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-bug">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'steel') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-steel">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'fairy') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-fairy">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'dragon') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-dragon">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'ground') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-ground">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'flying') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-flying">' + obj.type.name + '</span><br>';
itypes++;
        } else if (obj.type.name == 'fighting') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-fighting">' + obj.type.name + '</span><br>';
itypes++;
        }else if (obj.type.name == 'psychic') {
          all_types += '<b>Tipo'+itypes+': </b><span class="badge badge-psychic">' + obj.type.name + '</span><br>';
itypes++;
        }
        
      });
      
      tipo.innerHTML = all_types;
    

      /* var type = neko.types['0'].type.name;
      console.log(type);
      if (type == 'electric') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-warning">' + neko.types['0'].type.name + '</span>';
      } else if (type == 'normal') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-light">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'fire') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-danger">' + neko.types['0'].type.name + '</span>';
        $("#imagenpokemon").removeClass("table table-dark");
        $("#imagenpokemon").addClass("fando");

      } else if (type == 'ice') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-info">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'grass') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-success">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'grass') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-success">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'dark') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-secondary">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'water') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-primary">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'ghost') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-fantama">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'poison') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-poison">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'rock') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-rock">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'bug') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-bug">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'steel') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-steel">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'fairy') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-fairy">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'dragon') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-dragon">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'ground') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-ground">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'flying') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-flying">' + neko.types['0'].type.name + '</span>';

      } else if (type == 'fight') {
        tipo.innerHTML = '<b>Tipo: </b><span class="badge badge-fight">' + neko.types['0'].type.name + '</span>';

      }

      var type2 = neko.types['1'].type.name;
      console.log(type2);
      if (type2 == 'electric') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-warning">' + neko.types['1'].type.name + '</span>';
      } else if (type2 == 'normal') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-light">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'fire') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-danger">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'ice') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-info">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'grass') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-success">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'dark') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-secondary">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'water') {
        tipo2.innerHTML = '<b>Tipo 2: </b><span class="badge badge-primary">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'ghost') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-fantama">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'poison') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-poison">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'rock') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-rock">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'bug') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-bug">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'steel') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-steel">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'fairy') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-fairy">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'dragon') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-dragon">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'ground') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-ground">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'flying') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-flying">' + neko.types['1'].type.name + '</span>';

      } else if (type2 == 'fight') {
        tipo2.innerHTML = '<b>Tipo2: </b><span class="badge badge-fight">' + neko.types['1'].type.name + '</span>';

      }
 */
    });
}






