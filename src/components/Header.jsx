import NewBudget from "./NewBudget"

NewBudget
function Header({ budget, setBudget, isValidBudget, setIsValidBudget }) {
    return (
        <header>
            <h1> Control Expenses</h1>

            {isValidBudget ? (

                <p>Control Budget</p>
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