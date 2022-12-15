export const ShowResults = ({ state: {good, neutral, bad } } ) => {
    // console.log(props);
    return (
        <div>
            <h3>STATISTICS</h3>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
        </div >        
    )
}