import React from 'react'
import classes from "./Shared.module.scss"
import PropTypes from "prop-types"

const Button = ({
    className,
    onClick,
    buttonType = 'default',
    type = 'button',
    bordered = false,
    children,
    center = false,
    margins = false,
    small = false,
    ...props
}) => {

    let buttonClass = classes.Button;

    if (buttonType === 'primary') buttonClass = classes.PrimaryButton;

    if (bordered) {
        buttonClass = `${buttonClass} ${classes.BorderedButton}`
    }

    if (margins) {
        buttonClass = `${buttonClass} ${classes.MarginsButton}`
    }

    if (center) {
        buttonClass = `${buttonClass} ${classes.CenterPos}`
    }

    if (small) {
        buttonClass = `${buttonClass} ${classes.SmallButton}`
    }

    return (
        <button onClick={onClick} className={`${buttonClass} ${className ?? ''}`} type={type} {...props} >
            {children}
        </button>
    )
}

Button.propTypes = {
  buttonType: PropTypes.oneOf(['default', 'primary']),
};

export default Button
