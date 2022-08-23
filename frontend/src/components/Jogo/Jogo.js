import "./Jogo.css";
import { useState } from "react";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import cano from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";

function Jogo() {

    const [estaPulando, setEstaPulando] = useState(false);

    document.onkeydown = function(){
        console.log("KeyDown");
        estaPulando = true;
    }

    console.log(15, { estaPulando });

    return (
        <div className="jogo">
            <img className="nuvens" src={clouds}/>
            <img className="cano" src={cano}/>
            <img className="mario" src={mario}/>
            <img className="gameover" src={gameover}/>
            <div className="chao"></div>
        </div>
    );
}

export default Jogo;