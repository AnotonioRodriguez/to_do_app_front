import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button,  Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import imagen from '../../img/BlackStones.jpg'


const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}))

export default function Login() {

    const classes = useStyles();
    const [login, setLogin] = useState([]);

    const obtenerDatos =(e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid lg={3} xs={12}>
                    <Box p={2}>
                    <Paper elevation={5}>
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
                        <Box>
                            <Typography variant="h6">
                                Iniciar sesión:
                            </Typography>
                        </Box>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Usuario:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="name"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Contrasena:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="password"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <Box p={2} textAlign="center">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                            >
                                Iniciar Sesion
                            </Button>
                        </Box>
                    </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
