import Estilos from "../css/Header.module.css";

const Header = ({title}) => {
  return (  
    <header className={Estilos.header}>
      <div className="container">
        <div className={Estilos.content}>
          <h1 className={Estilos.title}>{title}</h1>
          <p className={Estilos.text}>
            Este proyecto ilustra los personajes de la famosa serie Rick y Morty
          </p>
        </div>
      </div>
    </header>
  );
}
 
export default Header;