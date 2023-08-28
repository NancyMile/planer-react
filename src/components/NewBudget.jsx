import { useState } from 'react';
import React from 'react'
import Message from './Message';

function NewBudget({ budget, setBudget }) {

  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();
    if ((!Number(budget)) || Number(budget) <0) {
      setMessage('Invalid Budget');
    } else {
      setMessage('Valid Budget')
    }
  }

  return (
    <div className=' contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={handleBudget}>
        <div className='campo'>
          <label htmlFor="budget">Budget</label>
          <input onChange={(e) => { setBudget(e.target.value) }}  className='neevo-presupuesto' placeholder='Add budget' type="text" name="" id="" />
          <input type="submit" value="Save" />
          {message && <Message type="error">{message}</Message> }
        </div>
      </form>
    </div>
  )
}

export default NewBudget;