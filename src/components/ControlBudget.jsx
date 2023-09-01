import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({ budget, expenses, setBudget, setExpenses, setIsValidBudget }) => {

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

    const handleResetApp = () => {
        const result = confirm('Are you sure?');
        if (result) {
            console.log('RESET')
            setBudget(0);
            setExpenses([]);
            setIsValidBudget(false);
        }
    }

  return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626':'#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: percentage > 100 ? '#DC2626':'#3b82f6'
                    })}
                    value={percentage}
                    text={`${percentage} % Spent`}
                />
              <div className="contenido-presupuesto">
                  <button className="reset-app" type="button" onClick={handleResetApp}>
                      Reset app
                  </button>
                  <p>
                      <span>Budget:</span>{formatAmount(budget)}
                  </p>

                  <p className={`${available < 0 ? 'negativo' : ''}`}>
                      <span>Available:</span>{formatAmount(available)}
                  </p>

                  <p>
                      <span>Spent:</span>{formatAmount(spent)}
                  </p>
              </div>  
          </>
    </div>
  )
}

export default ControlBudget