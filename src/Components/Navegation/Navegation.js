import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import imagen from '../../img/BlackStones.jpg'
import NewTask from  '../../Pages/Tasks/NewTask'
import { Link } from 'react-router-dom';

export default function Navegation(props) {
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));
    
    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    }

    const handleClickOpenUser = () => {
        setOpenUser(!openUser);
    };

    const cerrarSesion =()=>{
        localStorage.removeItem("sesionUser");
        localStorage.removeItem("tokenUser");
    };

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
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>Incio</b>
                </Button>
                {sesionUser ? (
                    <>
                        <Button
                            component={Link}
                            to="/tasks"
                            sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                        >
                            <b>Tareas</b>
                        </Button>
                        <NewTask />
                    </>
                ) : (
                    <>
                        <Button
                            component={Link}
                            to="/login"
                            sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                        >
                            <b>Sesión</b>
                        </Button>
                        <Button
                            component={Link}
                            to="/register"
                            sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                        >
                            <b>Registro</b>
                        </Button>
                    </>
                )}
                
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
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={handleClickOpen}
                >
                    <MenuItem component={Link} to="/" onClick={handleClickOpen}>
                        <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                    {sesionUser ? (
                        <>
                            <MenuItem component={Link} to="/tasks" onClick={handleClickOpen}>
                                <Typography textAlign="center">Tareas</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClickOpen}>
                                <NewTask />
                            </MenuItem>
                        </>
                        ) : (
                        <>
                            <MenuItem component={Link} to="/login" onClick={handleClickOpen}>
                                <Typography textAlign="center">Sesión</Typography>
                            </MenuItem>
                            <MenuItem component={Link} to="/register" onClick={handleClickOpen}>
                                <Typography textAlign="center">Registro</Typography>
                            </MenuItem>
                        </>
                    )}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                {sesionUser ? (
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }} onClick={handleClickOpenUser} >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                ) : null}
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={openUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={openUser}
                    onClose={handleClickOpenUser}
                >
                    <MenuItem 
                        component={Link} 
                        to="/"
                        onClick={() => {
                            handleClickOpenUser()
                            cerrarSesion()
                        }}
                    >
                        <Typography textAlign="center">Cerrar Sesión</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    )
}
