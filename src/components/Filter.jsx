import { useState, useEffect } from "react";

const filter = ({ filter, setFilter}) => {

  return (
      <div className=" filtros sombra contenedor">
          <form>
              <div className="campo">
                  <label htmlFor="">Filtrar Gastos</label>
                  <select value={filter} onChange={(e) => { setFilter(e.target.value)}}>
                        <option value="" disabled>-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="recreation">Recreation</option>
                        <option value="Services">Services</option>
                  </select>
              </div>
          </form>
      </div>
  )
}

export default filter