import Header from './components/Header'
import { useState, useEffect } from 'react'
import newExpense from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import {generateId} from './helpers';
import ExpensesList from './components/ExpensesList';
import Filter from './components/Filter';

function App() {

  const [budget, setBudget] = useState(
    localStorage.getItem('budget') ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []);
  const [spentEdit, setSpentEdit] = useState({});

  const [filter, setFilter] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      //console.log('Spent edit ready');
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      },500);
    }
  }, [spentEdit]);

  useEffect(() => {
    //console.log('Budget');
    Number(localStorage.setItem('budget', budget ?? 0));
  }, [budget]);

  useEffect(() => {
    //console.log('Budget');
    Number(localStorage.setItem('expenses',JSON.stringify(expenses) ?? []));
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      //console.log('filtrando')
      const filteredExpenses = expenses.filter(expense => expense.category === filter)
      //console.log(filteredExpenses)
      setFilteredExpenses(filteredExpenses)

    }
  },[filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  },[]);

  const handleNewSpent = () => {
    setModal(true);
    setSpentEdit({})

    setTimeout(() => {
      setAnimateModal(true);
    },500);
  }

  const saveExpense = (expense) => {
    if (expense.id) {
      //editing
      const updateExpenses = expenses.map(spentState => spentState.id === expense.id ? expense : spentState);
      setExpenses(updateExpenses);
      setSpentEdit({});
    } else {
      //new expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    //close modal
    setAnimateModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  const deleteExpense = (id) => {
    //console.log('deleting ', id);
    const remainExpenses = expenses.filter(remainingSpent => remainingSpent.id !== id)
    setExpenses(remainExpenses);
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
            <Filter
              filter={filter}
              setFilter={setFilter}
            />
            <ExpensesList
              expenses={expenses}
              setSpentEdit={setSpentEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
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
        setSpentEdit={setSpentEdit}
        />
      }

    </div>

  )
}

export default App
