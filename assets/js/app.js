const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameRef = document.querySelector('.name');//se añadio .name en lugar de name | Se cambio de nombre por algo mas explicito 
const blogRef = document.querySelector('.blog');//blog es una clase, se cambia #blog por .blog | Se cambio de nombre por algo mas explicito 
const locationRef = document.querySelector('.location'); //| Se cambio de nombre por algo mas explicito 

async function displayUser(username){//La función se hace async debido a la promesa fetch
  nameRef.textContent = 'Cargando...';
 try{//Se aañdio try catch para consumir
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    nameRef.textContent = data.name;
    blogRef.textContent = data.blog;
    locationRef.textContent = data.location;//Se eliminaron comillas y el fotmato ${}
  } catch(error){
    handleError(error);
  }

 }

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameRef.textContent = "Error: "+err;
}

displayUser('stolinski');