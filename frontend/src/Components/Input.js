import React from 'react'

function Input({label,placeholder}){
  return (
    <div className='inputContainer'>
    <label>{label}:</label>
    <input type='text' placeholder={placeholder}/>
    </div>
  )
}

export default Input