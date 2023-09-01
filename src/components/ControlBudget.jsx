import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({ budget, expenses }) => {

    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, spent) => spent.amount + total, 0);
        setSpent(totalSpent);

        const totalAvailable = budget - totalSpent;
        setAvailable(totalAvailable);

        //calcu;ate percentage
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1500);

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
            <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: '#f5f5f5'
                    })}
                    value={percentage}
                    text={`${percentage} % Spent`}
                />
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