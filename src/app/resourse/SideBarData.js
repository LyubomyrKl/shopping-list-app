import React from 'react';
import * as AiIcons from 'react-icons/ai';


const SidebarData = [
    {
        title: 'Shopping List',
        path: '/',
        icon: <AiIcons.AiOutlineUnorderedList />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Calories',
        path: '/calories',
        icon: <AiIcons.AiOutlineFire />,
        cName: 'nav-text'
    },

];

export default SidebarData