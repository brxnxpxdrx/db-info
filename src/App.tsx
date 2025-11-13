import { use, useEffect, useState } from "react";
import { api } from "./api/index";
import "./App.css"

export function App() {  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get("/characters");
      setCharacters(response.data.items || response.data);
    } 

    
    
    loadCharacters();
  }, []);
  const personagemDefault = {
  id: 1,
  name: "Goku",
  ki: "60.000.000",
  maxKi: "90 Septillion",
  race: "Saiyan",
  gender: "Male",
  description: "...",
  image: "https://dragonball-api.com/characters/goku_normal.webp",
  affiliation: "Z Fighter",

};

  const [characters, setCharacters] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [avatar, setAvatar] = useState(personagemDefault);
  console.log(characters);
  console.log(pesquisa);



  const click = () => {
  
    let personagem:any = 'Goku'
    const findCharacter = characters.map((char) => { 
      if(char.name.toLowerCase().includes(pesquisa.toLowerCase())) {
       personagem = char
       setAvatar(personagem)
      }
    } )
console.log(personagem);
  
    
  }


  return (
    <div>
     <main>
      <img src="https://www.pngplay.com/wp-content/uploads/12/Dragon-Ball-Z-Background-PNG.png" alt="" />
      <h3>CHARACTERS</h3>
      <div className="busca">
      <input onChange={e => setPesquisa(e.target.value)} type="text" placeholder="Search..."/>
      <button onClick={click}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
      </div>
     </main>
    <div className="return">
      <img src={avatar.image} alt="" />
      <h3> NAME: {avatar.name}</h3>
      <p> KI: {avatar.ki}</p>
      <p>RACE: {avatar.race}</p>
      <div className="description"><p>DESCRIPTION: {avatar.description}</p></div>
      
      <p>AFFILIATION: {avatar.affiliation}</p>
    </div>
    </div>
  );
}

export default App;
