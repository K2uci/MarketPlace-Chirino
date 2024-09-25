import React, { useState } from 'react'
import './HeaderMain.css'
// MATERIAL UI
import { Drawer } from '@mui/material';
import  { BiAlignRight }  from "react-icons/bi";
//
import OpenMenu from '../openMenu/OpenMenu';

const HeaderMain: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="cont_info">
                <img id="photo_logo" />
                <h2>
                    Tienda Chirino
                </h2>
            </div>
            <button onClick={() => setIsOpen(true)}>
                <BiAlignRight size={30} color='black'  />
            </button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <OpenMenu />
            </Drawer>
        </header>
    )
}

export default HeaderMain