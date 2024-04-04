import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
const { currency, setCurrency } = useContext(AppContext);
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    return (
        <div className='alert alert-danger'>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
