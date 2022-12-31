import { useState, useEffect, Fragment } from "react";

import Estilos from "../css/Characters.module.css";

// Variable Global
let pagina = 1;

const Characters = () => {

  const [ characters, setCharacters ] = useState([]);
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character?page=1");

  const handlePrevious = () => {
    if(pagina > 1) {
      pagina = pagina - 1;
      const newUrl = `https://rickandmortyapi.com/api/character?page=${pagina}`;
      setUrl(newUrl);
    }
  }

  const handleNext = () => {
    if(pagina < 42) {
      pagina = pagina + 1;
      const newUrl = `https://rickandmortyapi.com/api/character?page=${pagina}`;
      setUrl(newUrl);
    }
  }

  useEffect(() => {
    const getDataAPI = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setCharacters(data.results);
    }
    getDataAPI();
  }, [url]);

  return (  
    <Fragment>
      <div className="container container-personajes" id="Personajes">
        <div className={Estilos.characters}>
          {
            characters.map(character => {
              const { id, name, status, species, image } = character
              return (
                <div 
                  key={id}
                  className={Estilos.box}
                >
                  <div className={Estilos.img}>
                    <img src={image} alt={name} />
                  </div>
                  <div className={Estilos.character}>
                    <h3 className={Estilos.name}>{name}</h3>
                    <p className={Estilos.specie}>{species}</p>
                    <p 
                      className={Estilos.status}
                      style={{
                        color: status === "Alive" ? "#49BA4F" : 
                               status === "Dead"? "#DE2E2E" : 
                               status === "unknown" ? "#C8B43F" : "#FFFFFF"
                      }}
                    >{status}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={Estilos.paginador}>
        <div className="container">
          <div className={Estilos.botones}>
            <div 
              className={Estilos.boton}
              onClick={handlePrevious}
            >
              <img src="./assets/arrow.svg" alt="Arrow Previous" />
              <a 
                className={Estilos.previous}
                disabled={pagina === 1 ? true : false}
                href="#Personajes"
              >
                Anterior
              </a>
            </div>
            <div 
              className={Estilos.boton}
              onClick={handleNext}
            >
              <a 
                className={Estilos.next}
                disabled={pagina === 42 ? true : false}
                href="#Personajes"
              >
                Siguiente
              </a>
              <img src="./assets/arrow.svg" alt="Arrow Next" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default Characters;