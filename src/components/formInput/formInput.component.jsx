import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input type={otherProps.type} 
                    onChange={otherProps.handleChange}
                    {...otherProps.required} 
                    className="form-input"/>
            {
                label ?
                (<label htmlFor="label"
                        className={`${otherProps.value.length ? 'shrink': '' } form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput;