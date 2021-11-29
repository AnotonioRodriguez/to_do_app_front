import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import imagen from '../../img/BlackStones.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));

    return (
        <>
            <Grid
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                 <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                >
                    <Avatar
                        alt="BlackStone" 
                        src={imagen}
                        sx={{ width: 140, height: 140, borderColor: "white 3px" }}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography variant="h3">
                        To do app Challenge
                    </Typography>
                </Box>
                <Box mt={5} textAlign="center">
                    <Typography variant="h5">
                        Registra tus tareas por medio de nuestro software web, para llevar un mayor orden.
                    </Typography>
                </Box>
                <Box mt={5} textAlign="center">
                    <Typography variant="h5">
                        Inicia sesion o registrate para poder comenzar
                    </Typography>
                </Box>
                {sesionUser ? null : (
                    <Box mt={5} textAlign="center">
                        <Button
                            component={Link}
                            to="/register"
                            size="large"
                            color="success"
                            variant="contained"
                        >
                            <b>Registro</b>
                        </Button>    
                    </Box>
                )}
            </Grid>
        </>
    )
}
