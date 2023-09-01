import Expense from './Expense'

const ExpensesList = ({ expenses, setSpentEdit, deleteExpense, filter,  filteredExpenses}) => {
    return (
        <div className='listado-gastos contenedor'>
            {filter ? (
                <>
                    <h2>{filteredExpenses.length ? 'Expenses' : 'No expenses'}</h2>
                    {filteredExpenses.map(spent => (
                        <Expense
                            key={spent.id}
                            spent={spent}
                            setSpentEdit={setSpentEdit}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                </>
                ) : (
                    <>
                        <h2>{expenses.length ? 'Expenses' : 'No expenses'}</h2>
                        {expenses.map(spent => (
                            <Expense
                                key={spent.id}
                                spent={spent}
                                setSpentEdit={setSpentEdit}
                                deleteExpense={deleteExpense}
                            />
                        ))}
                    </>
                )}
        </div>
  )
}

export default ExpensesList