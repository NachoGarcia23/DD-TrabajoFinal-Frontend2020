
const buscador = document.querySelector("form") ;

const pokeBusqueda = (event) =>{
   event.preventDefault() ;
   const pokeName = event.target[0].value;
   const pokeId = event.target[0].value;
   localStorage.setItem("nombre-pokemon" , pokeName, "numero-pokemon" , pokeId);
   setTimeout(function() {
        location.href = "PokeCards.html";
   }, 1000)
}

buscador.addEventListener('submit', pokeBusqueda);
