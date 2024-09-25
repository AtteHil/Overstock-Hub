"use client";
import * as React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        
            <Box sx={{ 
                    position: 'sticky',
                    
                    
                    justifyContent: '',
                    p: 1,
                    
                    borderRadius: 1,
                    
                }}>
                
                <AppBar position="fixed" sx ={{backgroundColor: '#00A36C', m: 1, borderRadius:1}}>
                    <Toolbar sx={{ display: 'flex' }}>
                        <Box flexGrow={1}>
                        <Link href="/">
                            <Button variant="h6" style={{fontSize: 24, fontFamily: 'impact, fantasy', color: 'white'}} >
                                OverStock Hub
                            </Button>
                        </Link>
                        <Button
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            FI
                        </Button>
                        </Box>
                        <Link href="/offers">
                            <Button sx={{backgroundColor: '#3b3b3b', borderRadius: 1, marginRight: 1}} color="inherit">Offers</Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button sx={{backgroundColor: '#3b3b3b', borderRadius: 1}} color="inherit">Login</Button>
                        </Link>
                        
                        
                        <Menu
                            
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            keepMounted
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            disableScrollLock 
                        >
                            <MenuItem onClick={handleClose}>EN</MenuItem>
                            <MenuItem onClick={handleClose}>SWE</MenuItem>
                        </Menu>
                        
                        
                    </Toolbar>
                </AppBar>
            
            </Box>
        
    );
}