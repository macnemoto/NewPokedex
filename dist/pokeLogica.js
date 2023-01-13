"use strict";
function buscaPuchamon() {
    let nombrePokemon = "bulbasaur";
    const imagen_pokemon = document.getElementById("imagenpokemon");
    const element = document.getElementById("nombrePokemon");
    if (element !== null) {
        nombrePokemon = element.value;
    }
    const habilidadesPokemon = document.getElementById("habilidadesPokemon");
    const tipo = document.getElementById("tipo");
    const tipo2 = document.getElementById("tipo2");
    nombrePokemon.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/" + nombrePokemon + "/")
        .then(function (response) {
        return response.json();
    })
        .then(function (neko) {
        imagen_pokemon.src = neko.sprites.front_default;
        const habilidadPruebaArray = neko.abilities;
        let all_habilidades = "";
        let iHabilidades = 1;
        habilidadPruebaArray.forEach((obj) => {
            all_habilidades +=
                "<b>Habilidad: " + iHabilidades + " </b>" + obj.ability.name + "<br>";
            iHabilidades++;
            console.log(obj);
        });
        habilidadesPokemon.innerHTML = all_habilidades;
        var itypes = 1;
        var typesArrayPokemon = neko.types;
        var all_types = "";
        typesArrayPokemon.forEach((obj) => {
            if (obj.type.name == "electric") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-warning">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "normal") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-light">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "fire") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-danger">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "ice") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-info">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "grass") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-success">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "grass") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-success">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "dark") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-secondary">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "water") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-primary">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "ghost") {
                all_types +=
                    "<b>itypes++;Tipo" +
                        itypes +
                        ': </b><span class="badge badge-fantama">' +
                        obj.type.name +
                        "</span><br>";
            }
            else if (obj.type.name == "poison") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-poison">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "rock") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-rock">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "bug") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-bug">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "steel") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-steel">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "fairy") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-fairy">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "dragon") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-dragon">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "ground") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-ground">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "flying") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-flying">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "fighting") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-fighting">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
            else if (obj.type.name == "psychic") {
                all_types +=
                    "<b>Tipo" +
                        itypes +
                        ': </b><span class="badge badge-psychic">' +
                        obj.type.name +
                        "</span><br>";
                itypes++;
            }
        });
        tipo.innerHTML = all_types;
    });
}
