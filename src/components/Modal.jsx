import { useState, useEffect } from 'react';
import CloseBtn from '../img/cerrar.svg';
import Message from './Message';

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, spentEdit, setSpentEdit}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    // the following are neded  when editing the expense
    const [date, setDate] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (Object.keys(spentEdit).length > 0) {
            //console.log('modal ready');
            setName(spentEdit.name);
            setAmount(spentEdit.amount);
            setCategory(spentEdit.category);
            setDate(spentEdit.date);
            setId(spentEdit.id);
        }
    },[]);

    const hideModal = () => {
        setAnimateModal(false);
        setSpentEdit({})

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation
        if ([name, amount, category].includes('')) {
            setMessage('Missing Data');

            setTimeout(() => {
                setMessage('');
            }, 1000);
            return
        }

        saveExpense({name, amount, category, id, date});
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="close"  onClick={hideModal}/>
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animateModal ? 'animar' : 'cerrar'} `}>
                <legend>{spentEdit.id ? "Edit Expense" : "New Expense"}</legend>
                {message && <Message type="error">{message}</Message>}
                <div className='campo'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="spense" id="spense" placeholder='spense' value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>

                <div className='campo'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" placeholder='amount' value={amount} onChange={(e) => {setAmount(Number(e.target.value))} }/>
                </div>

                <div className='campo'>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={(e) => {setCategory(e.target.value)} } value={category}>
                        <option value="" disabled>-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="recreation">Recreation</option>
                        <option value="Services">Services</option>
                    </select>

                    <input type="submit" value={spentEdit.id ? "Edit Expense" : "Add Expense"} />
                </div>
            </form>
        </div>
    )
}

export default Modal