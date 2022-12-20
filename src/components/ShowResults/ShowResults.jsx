import PropTypes from "prop-types";

import styles from './ShowResults.module.css';
import { Notification } from 'components/Notification/Notification';

export const ShowResults = ({ state: { good, neutral, bad } }) => {     
    const countTotalFeedback = (a, b, c) => a + b + c; 
    const countPositiveFeedbackPercentage = (a, b, c) => (a + b + c) && Math.round(100 * a / (a + b + c));
    const noStatistics = (a, b, c) => a + b + c === 0;
    return (
        <>
        <div className={noStatistics(good, neutral, bad)? styles.invisible : ''}>               
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
            <p>Positive: {countPositiveFeedbackPercentage(good, neutral, bad)}%</p>
        </div >  
                <Notification showMessage={noStatistics(good, neutral, bad)}
                message="There is no feedback" />
        </>
    )
}

ShowResults.propTypes = {
    state: PropTypes.shape({
        good: PropTypes.number.isRequired, 
        neutral: PropTypes.number.isRequired,  
        bad: PropTypes.number.isRequired,  
    }),    
}