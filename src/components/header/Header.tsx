import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/bookLogo.svg';


export const Header = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color={'transparent'}>
                <Toolbar>
                    <img src={logo} alt="BookLogo"
                         style={{width: '60px', marginRight: '15px'}}/>
                    <Typography
                        variant="h6"
                    >
                        BookFinder
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}