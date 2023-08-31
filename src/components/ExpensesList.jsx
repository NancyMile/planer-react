import Expense from './Expense'

const ExpensesList = ({ expenses, setSpentEdit}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{expenses.length ? 'Expenses' : 'No expenses'}</h2>
            {expenses.map(spent => (
                <Expense
                    key={spent.id}
                    spent={spent}
                    setSpentEdit={setSpentEdit}
                />
            ))}
        </div>
  )
}

export default ExpensesList