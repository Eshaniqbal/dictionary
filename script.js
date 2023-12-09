
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d4696ebc0mshc91b0f5482a0790p17c40djsnb36e013ea98e',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

const getdefination = (word)=>{
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word, options)

    .then(response => response.json())
    .then(response =>  {
        definition.innerHTML = response.definition;
    make.innerHTML = response.word;
        

   
        console.log(response) })
    .catch(err => console.error(err));
    
    
    }
    submit.addEventListener('click',()=>{
        event.preventDefault();
        getdefination(word.value);

    });
getdefination('Hello!!');