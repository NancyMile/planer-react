const ControlBudget = ({ budget }) => {
  return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <div>
              <p>Graphic</p>
              <div className="contenido-presupuesto">
                  <p>
                      <span>Budget:</span> ${budget}
                  </p>
              </div>  
          </div>
    </div>
  )
}

export default ControlBudget