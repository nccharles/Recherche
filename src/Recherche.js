import "./Recherche.css";
import { useEffect } from "react";
const Recherche = ({moteur1,moteur2}) => {
    useEffect(() => {
        chercher()
    }, [])

const chercher=()=>{
    console.log(`I'm searching on ${moteur1} and ${moteur2}`)
}
  return (
    <div className="App">
      <header className="App-header">
      I'm searching on {moteur1} and {moteur2}
      </header>
    </div>
  );
};

export default Recherche;
