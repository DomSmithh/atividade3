import Title from './Title';
import Button from './Button';
import Noticia from './Noticia';
import "./App.css"

function App() {
    const lista_noticias = [
        {
            hour: "28/05/2022 09:01",
            description: "Estão abertas as inscrições para projetos de ensino"
        },        
        {
            hour: "28/05/2022 09:00",
            description: "Estão abertas as inscrições para projetos de pesquisa"
        },
        {
            hour: "27/05/2022 13:32",
            description: "Manutenção do Sistema SUAP acontece nesta sexta-feira(27)"
        },
    ];

    return (
        <div className='container'>
            <Title />

            {lista_noticias.map((noticia) => {
                return <Noticia horario={noticia.hour} desc={noticia.description} />
            })}

            <Button frase="Mais Noticias" />
            <div>Feliz Natal</div>

        </div>

    );
}

export default App
