import React from "react";
import PropTypes from "prop-types";

export const Section = ({title, children}) => {
    return(
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}
Section.propTypes = {
    title: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
}