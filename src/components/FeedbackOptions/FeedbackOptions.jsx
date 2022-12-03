import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={styles.CounterControls}>
            {options.map(el => {
                return(
                    <div key = {el}>
                        <button className= {styles.button} onClick={() => onLeaveFeedback(el)}>{el}</button>
                    </div>
                )
            })}
           
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}