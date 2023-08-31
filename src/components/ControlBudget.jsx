import { useEffect, useState } from "react";

const ControlBudget = ({ budget, expenses }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, spent) => spent.amount + total, 0);
        setSpent(totalSpent);
    },[expenses])

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <div>
              <p>Graphic</p>
              <div className="contenido-presupuesto">
                  <p>
                      <span>Budget:</span>{formatAmount(budget)}
                  </p>

                  <p>
                      <span>Available:</span>{formatAmount(available)}
                  </p>

                  <p>
                      <span>Spent:</span>{formatAmount(spent)}
                  </p>
              </div>  
          </div>
    </div>
  )
}

export default ControlBudget