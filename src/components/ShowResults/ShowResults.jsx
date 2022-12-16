export const ShowResults = ({ state: {good, neutral, bad } } ) => {
    // console.log(props);   
    const countTotalFeedback = (a, b, c) => a + b + c; 
    const countPositiveFeedbackPercentage = (a, b, c) => (a + b + c ) && Math.round(100 * a / (a + b + c));
    return (
        <div>           
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
            <p>Positive: {countPositiveFeedbackPercentage(good, neutral, bad)}%</p>
        </div >        
    )
}