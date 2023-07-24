import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-blue-300'>
            <div className='flex justify-center gap-5 py-5'>
                <Link to={'/income'}>Income</Link>
                <Link to={'/expenses'}>Expenses</Link>
            </div>
        </div>
    );
};

export default Navbar;