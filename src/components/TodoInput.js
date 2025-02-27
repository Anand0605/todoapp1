import React, { useState } from 'react'

function TodoInput(props) {
const [inputText, setInputText] = useState('')

const handlePress = (e)=>{
if(e.keyCode===13){
    props.addList(inputText)
            setInputText('')
}
}

  return (
    <div className='input-container'>
        <input type='text' 
        className='input-box-todo'
         placeholder='enter your todo'
         value={inputText}
         onChange={e =>{
            setInputText(e.target.value)
            
         }}
         onKeyDown={handlePress}
        />
        <button className='add-btn'
        onClick={()=>{
            props.addList(inputText)
            setInputText('')
        }} 
        >+</button>
        
    </div>
  )
}

export default TodoInput