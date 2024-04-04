import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import  ExpenseTotal  from '../components/ExpenseTotal';
const Budget = () => {
    const { currency, setCurrency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');
    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        setNewBudget(newBudget);

        if (newBudget > 20000){
            alert("The value cannot exceed 20000"); }
        else if (newBudget < ExpenseTotal) {
            alert("You cannot reduce budget value lower than spending");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;