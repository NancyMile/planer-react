import NewBudget from "./NewBudget"

NewBudget
function Header({ budget, setBudget }) {
    return (
        <header>
            <h1> Control Expenses</h1>
            <NewBudget
                budget={budget}
                setBudget={setBudget}
            />
      </header>
  )
}

export default Header