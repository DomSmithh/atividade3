import Title from './Title';
import Noticia from './Noticia';
import "./App.css"

function App() {
    const lista_noticias = [
        {
            numeral: "1",
            description: "Funcionária que denunciou procurador diz que agressor 'desprezava mulheres' e teme sair na rua:'Muito medo'"
        },        
        {
            numeral: "2",
            description: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nesta quinta; veja se você está no grupo"
        },
        {
            numeral: "3",
            description: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro"
        },
        {
            numeral: "4",
            description: "Em Itajubá, assaltantes armados etacam agência da Caixa Econômica Federal; 7 ficam feridos"
        },
        {
            numeral: "5",
            description: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'"
        }
    ];

    return (
        <div className='container'>
            <Title />

            {lista_noticias.map( (noticia) => {
                return <Noticia
                num={noticia.numeral} desc={noticia.description} />
            })}

        </div>

    );
}

export default App
