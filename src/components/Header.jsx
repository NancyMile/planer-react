import ControlBudget from "./ControlBudget"
import NewBudget from "./NewBudget"

function Header({ budget, setBudget, isValidBudget, setIsValidBudget }) {
    return (
        <header>
            <h1> Control Expenses</h1>

            {isValidBudget ? (
                <ControlBudget
                    budget={budget}
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