import React from 'react'
import Button from './Button'

const Form = ({ req, setReq }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
        <Button 
            buttonText="users"
            req={req} 
            setReq={setReq}
        />
        <Button 
            buttonText="posts"
            req={req} 
            setReq={setReq}
        />
        <Button 
            buttonText="comments"
            req={req} 
            setReq={setReq}
        />

    </form>
  )
}

export default Form