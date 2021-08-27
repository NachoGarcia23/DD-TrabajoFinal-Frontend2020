class dataApiProcessor {

    async getData() {
        const pokeName = localStorage.getItem("pokeName" ,"pokeId") ; 
        const data = await fetch( `https://app.pokemon-api.xyz/pokemon/${pokeName}`); 
        const json = await data.json();
        return json;
    }

}