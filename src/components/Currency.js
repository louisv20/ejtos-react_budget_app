import React, { useState, useContext} from 'react';
import 'C:/Users/27lou/ejtos-react_budget_app/src/App.css';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, setCurrency } = useContext(AppContext); // Access currency state and update function from context

    // Function to handle currency change
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value); }; 
    
    
    return (
        <div className='custom-dropdown-menu'>
          <select
            className='custom-dropdown-btn custom-dropdown-menu'
            aria-label= 'Currency'
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value='$'>Currency ($ Dollar)</option>
            <option value='£'>Currency ( £ Pound)</option>
            <option value='€'>Currency (€ Euro)</option>
            <option value='₹'>Currency (₹ Rupee)</option>
          </select>
        </div>
    );
};

export default Currency;
