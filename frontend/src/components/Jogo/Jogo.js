import "./Jogo.css";
import { useRef, useState } from "react";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import cano from "../../assets/pipe.png";
import gameover from "../../assets/game-over.png";

function Jogo() {

    //console.log("Componente de jogo renderizado");

    const [estaPulando, setEstaPulando] = useState(false);

    // Criamos as referencias para o mario e o cano
    const marioRef = useRef();
    const canoRef = useRef();

    function marioEstaNoCano(){
        const mario = marioRef.current;
        const cano = canoRef.current;

        if (!mario || !cano){
            return;
        }

        return(
            cano.offsetLeft > mario.offsetLeft &&
            cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
            mario.offsetTop + mario.offsetHeight > cano.offsetTop
        );
    };

    //Implementação temporária para mostrar se o mario esta no cano ou não
    setInterval(
        function () {
            const valor = marioEstaNoCano();
            console.log("Mário está no cano?", valor);
        }, 100
    );
    

    document.onkeydown = function(){
        //console.log("KeyDown");
        setEstaPulando(true);

        setTimeout(
            function(){
                setEstaPulando(false);
            },700
        );
    }

    // Classe ".mario" padrão do elemento
    let marioClassName = "mario";

    // Caso estaPulando seja true, adiciona a classe ".mario-pulo" no elemento
    if(estaPulando){
        marioClassName = "mario mario-pulo";
    }

    //console.log(15, { estaPulando });

    return (
        <div className="jogo">
            <img className="nuvens" src={clouds}/>
            <img ref={canoRef} className="cano" src={cano}/>
            <img ref={marioRef} className={marioClassName} src={mario}/>
            <img hidden className="gameover" src={gameover}/>
            <div className="chao"></div>
        </div>
    );
}

export default Jogo;