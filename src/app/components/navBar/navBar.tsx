import * as React from 'react';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import cn from "classnames";
import SidebarData  from "../../resourse/SideBarData";

import {changeActiveStatus, changeActivePage} from "../../slices/navbarSlice";

import './navBar.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


interface navbarProps{
    pageName: string
}

const NavBar = (props: navbarProps) => {

    const dispatch = useAppDispatch()
    const toggleSideBar = () => dispatch(changeActiveStatus());
    const sidebar = useAppSelector( state => state.navbar.menuActiveStatus)
    const menuItems = SidebarData.map((item)=>{
        return (
            <li key={nanoid()}
                className={item.cName}
                onClick={()=>{
                    toggleSideBar()
                    dispatch(changeActivePage(item.title))
                }}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    })

    return (
        <>
            <div className='navbar'>
                <Link to={"#"} id='open-menu'className={'menu-bars'}>
                    <AiIcons.AiOutlineBars onClick={toggleSideBar}/>
                </Link>
                <span>{props.pageName}</span>
            </div>
            <nav className={cn('nav-menu', {'active': sidebar})}>
                <ul className="nav-menu-items">
                    <li className='navbar-toggle' id='close-menu'>
                        <Link to={"#"} className={'menu-bars close-icon'}>
                            <AiIcons.AiOutlineClose onClick={toggleSideBar}/>
                        </Link>
                    </li>
                    {menuItems}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;