import React from 'react'
import './error.css'

function ErrorDisplay({error}) {

  if(error == null)
  {
    return <></>
  }

  return (
    <div className='error-message'>
        <span className='error-text'>{error}</span>
    </div>
  );
}

export default ErrorDisplay