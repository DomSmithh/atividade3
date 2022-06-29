import { useState } from 'react';
import Button from './Button';
import './Perfil.css';



function Perfil({nome, valor, user, projeto}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);

    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }

    return(
        <div className='card'>
            <p classname= 'data'>25/05/2022 15:10</p>
            <p className= "cardTitle">Manutenção do Sistema SUAP acontece nesta sexta-feira(27) </p>
            
            
        </div>
    );
}
export default Perfil;