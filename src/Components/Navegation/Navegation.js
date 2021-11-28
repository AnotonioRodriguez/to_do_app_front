import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import imagen from '../../img/BlackStones.jpg'
import NewTask from  '../../Pages/Tasks/NewTask'
import { Link } from 'react-router-dom';

export default function Navegation() {

    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    }

    const handleClickOpenUser = () => {
        setOpenUser(!openUser);
    }

    return (
        <>
            <Box>
                <Avatar 
                    alt="BlackStone" 
                    component={Link}
                    to="/"
                    src={imagen}
                    sx={{ width: 50, height: 50, borderColor: "white 3px" }}
                />
            </Box>
            <Box sx={{ flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
                <Button
                    component={Link}
                    to="/"
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>Home</b>
                </Button>
                <Button
                    component={Link}
                    to="/login"
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>Login</b>
                </Button>
                <Button
                    component={Link}
                    to="/register"
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>Register</b>
                </Button>
                <Button
                    component={Link}
                    to="/tasks"
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>Tasks</b>
                </Button>
                <NewTask />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClickOpen}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            <Menu
                anchorEl={open}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={Boolean(open)}
                onClose={handleClickOpen}
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem component={Link} to="/" >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/login" >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/register" >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={setOpenUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(openUser)}
                    onClose={handleClickOpenUser}
                >
                    <MenuItem 
                        onClick={handleClickOpenUser}
                    >
                        <Typography textAlign="center">Cerrar Sesión</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    )
}
