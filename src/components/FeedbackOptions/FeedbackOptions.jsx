import { nanoid } from "nanoid";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {     
    return (        
        <div>  
            {options.map(option => <button type='button' key={nanoid()} name={option}
                onClick={onLeaveFeedback}>{option}</button>)}            
        </div>
    )
}
