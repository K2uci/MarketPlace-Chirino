import React, { useState } from 'react';
import './openMenu.css'
//MATERIAL UI
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const OpenMenu:React.FC = () => {
    const [manOpen, setManOpen] = useState(false);
    const [woman, setWomanOpen] = useState(false);
    const [accesoris,setAccesoris] = useState(false)

    return (
        <div className='asd'>

        <List 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
        >
            <ListItemButton onClick={()=>setManOpen(!manOpen)}>
                <ListItemText primary="Hombres" />
                {manOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={manOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Pullovers xd" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Pantalon xd" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Zapatos xd" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>setWomanOpen(!woman)}>
                <ListItemText primary="Mujeres" />
                {woman ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={woman} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Blusas" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Pantalones" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Zapatos" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>setAccesoris(!accesoris)}>
                <ListItemText primary="Accesorios" />
                {accesoris ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={accesoris} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Relojes" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Gorras" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Algo mas" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
        </div>
    );
}

export default OpenMenu