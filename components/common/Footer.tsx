import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='p-5 bg-gray-800 text-sm text-white'>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;