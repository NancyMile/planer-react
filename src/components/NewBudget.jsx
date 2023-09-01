import { useState } from 'react';
import React from 'react'
import Message from './Message';

function NewBudget({ budget, setBudget, setIsValidBudget }) {

  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();
    if ((!Number(budget)) || Number(budget) <0) {
      setMessage('Invalid Budget');
      return
    }

    setMessage('');

    console.log(budget);
    setIsValidBudget(true);

  }

  return (
    <div className=' contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={handleBudget}>
        <div className='campo'>
          <label htmlFor="budget">Budget</label>
          <input onChange={(e) => { setBudget(Number(e.target.value)) }}  className='neevo-presupuesto' placeholder='Add budget' type="number" name="budget" id="budget" value={budget} />
          <input type="submit" value="Save" />
          {message && <Message type="error">{message}</Message>}
        </div>
      </form>
    </div>
  )
}

export default NewBudget;