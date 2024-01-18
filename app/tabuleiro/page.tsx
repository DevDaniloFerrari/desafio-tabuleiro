import Casa from "../../components/Casa"

function montarLinha(colunas: number) {
    var linha = [];

    let contador = 1
    let cor = 'white'
    for (let index = 0; index < 64; index++){
        contador++
        linha.push(<Casa index={index} cor={cor} />);
        if(contador > colunas){
            contador = 1
            continue
        }
        cor = cor == 'white' ? 'black' : 'white'
    }

    return linha;
}

export default function tabuleiro() {
    const colunas = 8
    const maxWidth = 100 * colunas
    return (
        <div style={{
            backgroundColor: 'gray',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: "flex",
            flexWrap: 'wrap'
        }}>
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: "flex",
                flexWrap: 'wrap',
                maxWidth: `${maxWidth}px`
            }}>
                {montarLinha(colunas)}
            </div>
        </div>
    )
}