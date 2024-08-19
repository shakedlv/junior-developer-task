import React, { useState } from 'react'
import './input.css'
import ErrorDisplay from '../error/error';
import validator from 'validator'

function Input({ index, url, onHandleChange, onHandleChangeEnd }) {
    const [error, setError] = useState(null)

    const handleChange = (index, value) => {
        if(isValidHttpUrl(value) || value.length == 0)
        {
            setError(null)
        }
        else
        {
            setError("Url is invalid! url must contain http / https and hostname (eg https://www.google.com)  ")
        }
        onHandleChange(index, value);
    }
    const handleChangeEnd = (index, value) => {
        onHandleChangeEnd(index, value);
    }

    function isValidHttpUrl(string) {
        try {
            const newUrl = new URL(string);
            return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
        } catch (err) {
            return false;
        }
    }


    return (
        <>
            <input
                className={error ? "error" : ""}
                key={index}
                type="text"
                value={url}
                onChange={(e) => handleChange(index, e.target.value)}
                onBlur={(e) => handleChangeEnd(index, e.target.value)}
                placeholder="Enter URL"
            />
            <ErrorDisplay error={error} />
        </>
    )
}

export default Input