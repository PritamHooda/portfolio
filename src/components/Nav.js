import React from 'react';

// Array contains nav bar items
const navItems = [
    {name: 'About', href: '#' },
    {name: 'Experience', href: '#' },
    {name: 'Skills', href: '#' },
    {name: 'Projects', href: '#' },
    {name: 'Contacts', href: '#' },
];

function Navbar() {
    return (
        <nav className="bg-black flex justify-between items-center h-24 max-w-7xl mx-auto px-4 text-white">
            <p className='ml-4 text-2xl'>Pritam Hooda</p>
            <ul className='hidden md:flex'>
                {navItems.map( item => (
                    <li className='p-4 hover:bg-[#00df9a] hover:text-black rounded-xl m-2 cursor-pointer duration-300 '>
                        <a href={item.href}>
                        {item.name}
                        </a>
                    </li>
                )) }
            </ul>
        </nav>
    );
}
export default Navbar;
