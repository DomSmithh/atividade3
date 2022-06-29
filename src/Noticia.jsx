import { useState } from 'react';
import './Noticia.css';

function Noticia({num, desc}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);

    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }

    return(
        <div className='card'>
            <p className="num">{num}</p>
            <p className="desc">{desc}</p>
        </div>
    );
}
export default Noticia;