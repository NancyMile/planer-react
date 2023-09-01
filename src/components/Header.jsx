import ControlBudget from "./ControlBudget"
import NewBudget from "./NewBudget"

function Header({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) {
    return (
        <header>
            <h1> Control Expenses</h1>

            {isValidBudget ? (
                <ControlBudget
                    expenses={expenses}
                    setExpenses={setExpenses}
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
                ) : (
                        <NewBudget
                            budget={budget}
                            setBudget={setBudget}
                            setIsValidBudget={setIsValidBudget}
                        />
                    )
            }
      </header>
  )
}

export default Header