import React, { useState } from "react";
import logo from './imagess/logo.svg'
import menu from './imagess/icon-menu.svg'
import close from './imagess/icon-close.svg'
import avatar from './imagess/image-avatar.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Hidden } from '@mui/material'

const Header = ({ data }) => {
  
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto" >
        <div className="flex items-center justify-start gap-4">
            <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
                <li onClick={()=>setIsOpen(true)} className='lg:hidden'>
                <img src={menu} alt="" className="cursor-pointer"/>
              </li>
            )}
              {isOpen && (
                              <li onClick={()=>setIsOpen(false)} className='lg:hidden'>
                              <img src={close} alt="" className="cursor-pointer close"/>
                            </li>
              )}
              <li>
                <img className="cursor-pointer" src={logo} alt="" />
              </li>
            </ul>
            <Hidden mdUp>
            <nav className={`${isOpen && 'open'}`} >
                <ul className="">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </Hidden>
        </div>
        <div>
           <ul className="cursor-pointer flex items-center justify-start gap-4">
            <li>
                <button>
                <AiOutlineShoppingCart/>
                </button>
            </li>
            <li><img className="w-12" src={avatar} alt="" /></li>
           </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
