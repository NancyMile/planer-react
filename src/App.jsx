import Header from './components/Header'
import { useState, useEffect } from 'react'
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
  const [spentEdit, setSpentEdit] = useState({});

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      //console.log('Spent edit ready');
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      },500);
    }
  },[spentEdit]);

  const handleNewSpent = () => {
    setModal(true);
    setSpentEdit({})

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
        expenses={expenses}
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
              setSpentEdit={setSpentEdit}
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
        spentEdit={spentEdit}
        />
      }

    </div>

  )
}

export default App
