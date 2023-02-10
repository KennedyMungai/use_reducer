import React, { useRef } from 'react'

import classes from './Input.module.css'

const Input = (props) =>
{
    const inputRef = useRef()

    const activate = () => 
    {
        inputRef.current.focus()
    }

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={inputRef}
            />
        </div>
    )
}

export default Input