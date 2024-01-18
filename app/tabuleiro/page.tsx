import Casa from "../../components/Casa"

function montarLinha() {
    var linha = [];

    for (let index = 0; index < 10; index++)
        linha.push(<Casa index={index} />);

    return linha;
}

export default function tabuleiro() {
    return (
        <div style={{
            backgroundColor: 'gray',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: "flex",
            flexWrap: 'wrap'
        }}>
            {montarLinha()}
        </div>
    )
}