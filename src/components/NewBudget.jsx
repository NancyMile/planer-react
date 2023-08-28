import React from 'react'

function NewBudget() {
  return (
    <div className=' contenedor-presupuesto contenedor sombra'>
      <h2>Manage Budget</h2>
      <form className='formulario'>
        <div className='campo'>
          <label htmlFor="budget">Budget</label>
          <input className='neevo-presupuesto' placeholder='Add budget' type="text" name="" id="" />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default NewBudget;