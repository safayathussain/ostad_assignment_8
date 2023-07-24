import React, { useState } from 'react';
import Navbar from '../Navbar';

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState(0)
    const handleExpenses = (e) => {
        e.preventDefault()
        const data = parseInt(e.target.expenses.value)
        setExpenses(expenses + data)
        e.target.expenses.value = ''
    }
    return (
        <div>
            <Navbar />
            <p className='text-center my-5'>Expenses: {expenses}</p>
            <form onSubmit={handleExpenses} className='flex items-center justify-center'>
                <input type="number" id='expenses' placeholder='Enter your expenses' className='text-lg border border-gray-400 px-2 mx-5' />
                <button type='submit' className='px-5 py-2 bg-blue-300'>Add</button>
            </form>
        </div>
    );
};

export default ExpensesPage;