const input = document.getElementById('input-number')
const errSpan = document.getElementById('error-span')
const form = document.getElementById('form')
const card = document.getElementById('card')





const pokemonDestructuring = (pokemon) => ({
        id: pokemon.id,
		name: pokemon.name.toUpperCase(),
		image: pokemon.sprites.other.home.front_default,
		height: pokemon.height / 10,
		weight: pokemon.weight / 10,
		/* types: pokemon.types, */
		experience: pokemon.base_experience,
});



const createCard =(pokemon) =>{
    const {id,name, image, height, weight, types, experience } = pokemonDestructuring(pokemon);

    return `
    <div id="card-container">
            <img src="${image}" alt="${name}" >
            <h2>${name}</h2>
            <p>${id}</p>
    </div>`;
};
const renderPokemon = (pokemon)=>{
    if(!pokemon){
        errSpan.textContent=`No existe este id.`
        
    }else{
        errSpan.textContent=[]; 
       card.innerHTML = createCard(pokemon);
    }
}

const isEmpty =() =>{
    errSpan.textContent=`Ingrese un numero`;
    return;
}

const searchPokemon = async (e) =>{
    e.preventDefault();
    const searchedId = input.value
    //si no hay id
    if(!searchedId){
        isEmpty();
        return;
    }
    //si hay
    const fetchedPokemon = await traerlos(searchedId);
    console.log(pokemonTemplate(fetchedPokemon)); //hasta aca estamos bien
    renderPokemon(fetchedPokemon);//aca ya no

    form.reset() 
}

const init =() =>{
 form.addEventListener('submit', searchPokemon)
}

init()