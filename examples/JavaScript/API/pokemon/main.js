async function fetchData(pokemon){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok){
            throw new Error('Could not fetch resource')
        }

        const data = await response.json();
        console.log(data);
        const pokemonSrite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = String(pokemonSrite);
        imgElement.style = 'display:block';
        
        
    }
    catch(e){
        console.log(e);
    }
}



function displayPokemon(){
    let input = document.getElementById('input');
    const pokemon = input.value.toLowerCase();
    input.value = '';
    fetchData(pokemon);
}

