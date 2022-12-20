import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {     
    return (        
        <div>  
            {options.map(option => <button type='button' key={nanoid()} name={option}
                onClick={onLeaveFeedback}>{option}</button>)}            
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
