export default function casa(props) {
    return (
        <div style={{
            height: '100px',
            width: '100px',
            backgroundColor: props.index % 2 === 0 ? 'white' : 'black'
        }} ></div>
    )
}