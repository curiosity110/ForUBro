const baseUrl = 'https://swapi.sit.academy/api/films/'
const filmsList = document.querySelector('.films')
const shipList = document.querySelector('.ships')
const pilotsList = document.querySelector('.pilots')
const detailsList = document.querySelector('.details')
const favoritesList = document.querySelector('.favorites')
const favorites = []

function clearButtons (arrOfSections) {
    for ( let section of arrOfSections) {
        section.innerHTML = ''
    }
}
function fetchFilms(url) {
    fetch(url)
    .then(res => res.json())
    .then(json => json.results.forEach( film => {
        let button = document.createElement('button')
        button.innerText = film.title;
        button.fetchFrom = film.url;
        button.addEventListener('click', () => {
            clearButtons([shipList, pilotsList, detailsList]);
            getShips(button.fetchFrom, 'starships', shipList);
            let description = document.getElementsByClassName('description')[0];
            description.innerText = film.opening_crawl;
        })
        let li = document.createElement('li');
        li.append(button);
        filmsList.append(li);
    }))
}

function getShips (shipsUrl, searchFor, appendTo){
    fetch(shipsUrl)
    .then(res => res.json())
    .then(json => { 
        json[searchFor].forEach(ship => {
            fetch(ship)
            .then(res => res.json())
            .then(json => {
                let button = document.createElement('button')
                button.innerText = json.name;
                button.fetchFrom = json.url;
                button.addEventListener('click', () => {
                    clearButtons([pilotsList, detailsList]);
                    getPilots(button.fetchFrom, 'pilots', pilotsList);             
                });
                let li = document.createElement('li');
                li.append(button);
                appendTo.append(li);
            }) 
        })
    })
}              
function getPilots (pilotsUrl, searchFor, appendTo){
    fetch(pilotsUrl)
    .then(res => res.json())
    .then(json => { 
        if (json[searchFor].length === 0) {
            let li = document.createElement('li');
            li.innerText = "No pilot with a specific name for this starship";
            appendTo.append(li)
        }
        json[searchFor].forEach(ship => 
            fetch(ship)
                .then(res => res.json())
                .then(json => {
                let button = document.createElement('button');
                button.innerText = json.name;
                button.fetchFrom = json.url;
                button.addEventListener('click', () => {
                    clearButtons([detailsList]);
                    getDetails(button.fetchFrom, detailsList);        
                })

                let favo = document.createElement('button');
                favo.pilot = json.name;
                favo.setAttribute('class', 'favo');
                favo.innerHTML = '<span> Add to Favorites </span>';
                favo.addEventListener('click', () => {
                    if (!favorites.includes(favo.pilot)) {
                        favorites.push(favo.pilot);
                    }
                    renderFavorites();
                });

                let li = document.createElement('li');
                button.append(favo);
                li.append(button);
                appendTo.append(li);
            }) 
        )}
    )
}           

function getDetails (detailsUrl, appendTo){
    fetch(detailsUrl)
    .then(res => res.json())
    .then(json => { 
        for (const key of ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender']){
            let li = document.createElement('li')
                li.innerText = `${key}: ${json[key]}`
                appendTo.append(li)
        }
        }
    )
}              

function renderFavorites () {
    favoritesList.innerHTML = ''
    for (let pilot of favorites) {
        let unfavoButton = document.createElement('button')
        unfavoButton.pilot = pilot
        unfavoButton.setAttribute('class', 'favo')
        unfavoButton.innerText = 'remove'
        unfavoButton.addEventListener('click', () => {
            if (favorites.includes(unfavoButton.pilot)) {
                favorites.splice(favorites.indexOf(unfavoButton.pilot), 1)
                renderFavorites()
            }
        })
        let li = document.createElement('li')
        li.innerText = pilot
        li.append(unfavoButton)
        favoritesList.append(li)
    }
}
fetchFilms(baseUrl)