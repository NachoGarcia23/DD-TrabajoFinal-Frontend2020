//Comienza la extraccion de datos de la API hacia la PokeCard

const pokeData = new dataApiProcessor();
pokeData.getData().then((pokemon) => {
    console.log(pokemon);

    const pokeId = document.querySelector('.numero-pokemon');
    pokeId.innerHTML = pokemon.id;
    
    const pokeName = document.querySelector('.nombre-pokemon');
    pokeName.innerHTML = pokemon.name.english;
    
    const pokeNameJapon = document.querySelector('.nameJapon');
    pokeNameJapon.innerHTML = pokemon.name.japanese;
    
    const pokeNameChina = document.querySelector('.nameChina');
    pokeNameChina.innerHTML = pokemon.name.chinese;
    
    const pokeIdFrancia = document.querySelector('.nameFrancia');
    pokeIdFrancia.innerHTML = pokemon   .name.french;
    
    const pokeImg = document.querySelector('.img-pokemon');
    pokeImg.src = pokemon.thumbnail;
    
    const pokeEspecie = document.querySelector('.especie-especifica');
    pokeEspecie.innerHTML = pokemon.species;
    
    const descripcion = document.querySelector('.descripcion-del-pokemon');
    descripcion.innerHTML = pokemon.description;

    const type = document.querySelector('.detalle-del-tipo');
    type.innerHTML = pokemon.type;
    
    const hp = document.querySelector('.detalle-HP');
    hp.innerHTML = pokemon.base.HP;

    const attack = document.querySelector('.detalle-attack');
    attack.innerHTML = pokemon.base.Attack;
    
    const defensa = document.querySelector('.detalle-de-defensa');
    defensa.innerHTML = pokemon.base.Defense;

    const spAttack = document.querySelector('.detalle-del-sp_attack');
    spAttack.innerHTML = pokemon.base.Sp. Attack;
    
    const spDefensa = document.querySelector('.detalle-del-sp_defense');
    spDefensa.innerHTML = pokemon.base.Sp. Defense;

    const velocidad = document.querySelector('.detalle-de-velocidad');
    velocidad.innerHTML = pokemon.base.Speed;

    const peso = document.querySelector('.detalle-del-peso');
    peso.innerHTML = pokemon.profile.weight;
    
    const altura = document.querySelector('.detalle-de-altura');
    altura.innerHTML = pokemon.profile.height;

})





