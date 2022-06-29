function Produto( {produtos} ){
    return(
        <div>
            <p>{produtos.nome} {produtos.valor} {produtos.user} {produtos.projeto}</p>
        </div>
    )
}

export default Produto;