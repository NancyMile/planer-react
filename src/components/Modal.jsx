import { useState } from 'react';
import CloseBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="close"  onClick={hideModal}/>
            </div>

            <form className={`formulario ${animateModal ? 'animar' : 'cerrar'} `}>
                <legend>New Spense</legend>
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
                    <select name="category" id="category" onChange={(e) => {setCategory(e.target.value)} }>
                        <option value="" disabled>-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="recreation">Recreation</option>
                        <option value="Services">Services</option>
                    </select>

                    <input type="submit" value="Add Expense" />
                </div>
            </form>
        </div>
    )
}

export default Modal