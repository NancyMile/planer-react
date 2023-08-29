import Expense from './Expense'

const ExpensesList = ({ expenses}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{expenses.length ? 'Expenses' : 'No expenses'}</h2>
            {expenses.map((expense) => (
                <Expense
                expense={expense}
                />
            ))}
        </div>
  )
}

export default ExpensesList