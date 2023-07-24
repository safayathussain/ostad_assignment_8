import React, { useState } from 'react';
import Navbar from '../Navbar';

const IncomePage = () => {
    const [income, setIncome] = useState(0)
    const handleIncome = (e) => {
        e.preventDefault()
        const data = parseInt(e.target.income.value)
        setIncome(income + data)
        e.target.income.value = ''
    }
    return (
        <div>
            <Navbar />
            <p className='text-center my-5'>Income: {income}</p>
            <form onSubmit={handleIncome} className='flex items-center justify-center'>
                <input type="number" id='income' placeholder='Enter your income' className='text-lg border border-gray-400 px-2 mx-5' />
                <button type='submit' className='px-5 py-2 bg-blue-300'>Add</button>
            </form>
        </div>
    );
};

export default IncomePage;