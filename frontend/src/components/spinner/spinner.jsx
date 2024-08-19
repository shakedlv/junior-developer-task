import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
    return (
        <div className='center'>
            <ClipLoader
                color={"#642775"}
                size={64}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner