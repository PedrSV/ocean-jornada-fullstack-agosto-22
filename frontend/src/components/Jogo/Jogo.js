import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import pipe from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";

function Jogo() {
    return (
        <div className="jogo">
            <img className="nuvens" src={clouds}/>
            <img className="pipe" src={pipe}/>
            <img className="mario" src={mario}/>
            <img className="gameover" src={gameover}/>
        </div>
    );
}

export default Jogo;