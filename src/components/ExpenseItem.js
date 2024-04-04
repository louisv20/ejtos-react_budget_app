import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import Layer2 from 'C:/Users/27lou/ejtos-react_budget_app/src/components/Layer 2.png';
import Layer3 from 'C:/Users/27lou/ejtos-react_budget_app/src/components/Layer 3.png';
const ExpenseItem = (props) => {
    const { currency, setCurrency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        }); 
        
    }
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
         <img
        src={Layer2}
        onClick={event => increaseAllocation(props.name)}
        style={{
            width: '35px',
            height: '35px',
            cursor: 'pointer', 
        }}
    />
</td>


<td>
         <img
        src={Layer3}
        onClick={event => decreaseAllocation(props.name)}
        style={{
            width: '40px',
            height: '35px',
            cursor: 'pointer', 
        }}
    />
</td>
        <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
