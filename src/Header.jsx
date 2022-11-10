import { Badge, Box, Container, Hidden, IconButton, List, ListItem, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import menu from './imagess/icon-menu.svg'
import logo from './imagess/logo.svg'
import close from './imagess/icon-close.svg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import avatar from './imagess/image-avatar.png'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const [isOpen,setIsOpen]=useState(false)
 const itemList=useSelector(state=>state.cart.itemList)
 const itemListLength=itemList.length
 

  return (
    <Container className='pt-5 flex  items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto'>
      
      <Box className="flex items-center justify-between gap-4">
         <div className='flex'>
          <List className="flex items-center justify-start  ">
          <Hidden mdUp>
            <ListItem
            onClick={()=>setIsOpen(true)} 
            >            
            <img src={menu} alt="" className="cursor-pointer"/>
            </ListItem>
            </Hidden>
            <ListItem>
              <Link to='/'>
            <img src={logo} alt="" className="cursor-pointer "/>
            </Link>
            </ListItem>
          </List>
          <Hidden mdDown>
          <List className='flex'>
          <ListItem className='cursor-pointer'>Collections</ListItem>
          <ListItem className='cursor-pointer'>Men</ListItem>
          <ListItem className='cursor-pointer'>Women</ListItem>
          <ListItem className='cursor-pointer'>About</ListItem>
          <ListItem className='cursor-pointer'>Contact</ListItem>
        </List>
          </Hidden>
          </div>
          <Box>
        <List className='flex items-center'>
          <ListItem>
            <Link to='/cart'>
            <button >
              <Badge badgeContent={itemListLength} showZero className='pt-2  text-orange-400 font-bold'>
              <AiOutlineShoppingCart style={{scale:'1.5'}} className='text-slate-800 bg-white'/>
              </Badge>
            </button>
            </Link>
          </ListItem>
          <ListItem className='cursor-pointer'>
          <img className="w-12" src={avatar} alt="" />
          </ListItem>
        </List>
      </Box>
      </Box>
      

      <SwipeableDrawer position='relative' anchor='left' open={isOpen} onOpen={()=>setIsOpen(true)} onClose={()=>setIsOpen(false)}
      
      >
        <div
        className='px-2 py-2 absolute top-10 right-10'
        onClick={()=>setIsOpen(false)}>
        <img src={close} alt="" className="cursor-pointer"/>
        </div>
        <div className='mt-8'>
        <List className='w-96'>
          <ListItem className='cursor-pointer'>Collections</ListItem>
          <ListItem className='cursor-pointer'>Men</ListItem>
          <ListItem className='cursor-pointer'>Women</ListItem>
          <ListItem className='cursor-pointer'>About</ListItem>
          <ListItem className='cursor-pointer'>Contact</ListItem>
        </List>
        </div>
      </SwipeableDrawer>

    </Container>
  )
}

export default Header