import React from 'react'
import { formatDate } from '../helpers';
import IconSavings from '../img/icono_ahorro.svg';
import IconHome from '../img/icono_casa.svg';
import IconFood from '../img/icono_comida.svg';
import IconExpenses from '../img/icono_gastos.svg';
import IconRecreation from '../img/icono_ocio.svg';
import IconHealth from '../img/icono_salud.svg';
import IconServices from '../img/icono_suscripciones.svg';
import { LeadingActions, SwipeableListItem ,SwipeableList, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const iconsDictionary = {
    savings: IconSavings,
    food: IconFood,
    home: IconHome,
    recreation: IconRecreation,
    Services: IconServices
}

const Expense = ({ spent, setSpentEdit, deleteExpense}) => {

    const { name, amount, category, date, id } = spent;
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => {
                setSpentEdit(spent);
            }}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => {
                deleteExpense(id)}}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={iconsDictionary[category]} alt="Icon" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='nombre-gasto'>{name}</p>
                            <p className='fecha-gasto'>Added: <span>{ formatDate(date) }</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
  )
}

export default Expense