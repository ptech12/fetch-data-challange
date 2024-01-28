import React from 'react'

const Button = ({ req, setReq, buttonText }) => {
  return (
    <button
        className={buttonText === req ? "selected" : null}
        type='button'
        onClick={() => setReq(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button