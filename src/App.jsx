import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card'; 
 


function App() {

  const [characters, setCharacters]= useState([]);
  const baseurl="https://rickandmortyapi.com/api/character";

  const fetchCharacters = (baseurl) =>{
  
  fetch(baseurl)
  .then(response=> response.json())
  .then(data => setCharacters(data.results)) 
  .catch(error => console.elog(error))
};
useEffect(() => {
  fetchCharacters(baseurl);
  },[])

  

  return (
   <>
      <a href="/">
      <h1 className="text-center mt-5">The Rick and Morty API</h1></a>
      { 
      characters.map((item)=>(
        
        
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
        <div ></div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
          <Card.Title><h1 className="text-center mt-5">{item.name}</h1></Card.Title>
          <Card.Text>
           <p className="text-center mt-5">ID: {item.id}</p>
           <p>Especie: {item.species}</p>
           <p>Genero: {item.gender}</p>
           <p>Origen: {item.origin.name}</p>
           <p>Creado: {item.created}</p>
          </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
        
      ))}
     
    </>
  );
}

export default App;
