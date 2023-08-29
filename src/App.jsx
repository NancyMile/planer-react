import Header from './components/Header'
import { useState } from 'react'
import newExpense from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import {generateId} from './helpers';
import ExpensesList from './components/ExpensesList';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    },500);
  }

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    //close modal
    setAnimateModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={newExpense} alt="new expense" onClick={handleNewSpent} />
          </div>
        </>
        )
      }

      {modal &&
        <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        />
      }

    </div>

  )
}

export default App
