import React from 'react'

function NewBudget({ budget, setBudget }) {
  return (
    <div className=' contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className='campo'>
          <label htmlFor="budget">Budget</label>
          <input onChange={(e) => { setBudget(e.target.value) }}  className='neevo-presupuesto' placeholder='Add budget' type="text" name="" id="" />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default NewBudget;