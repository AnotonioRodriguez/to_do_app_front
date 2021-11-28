import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}))

export default function Register() {
    const classes = useStyles();
    const [datosPersonales, setDatosPersonales] = useState([]);

    const obtenerDatos =(e)=>{
        setDatosPersonales({...datosPersonales, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid lg={5} xs={12}>
                    <Box p={2}>
                    <Paper elevation={5}>
                        <Box>
                            <Typography variant="h6">
                                Registro dentro de nuestro sitema de tareas:
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" >
                                Datos Personales:
                            </Typography>
                        </Box>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Nombre:</Typography>
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
                                <Typography>Telefono:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="telephone"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>Ciudad:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="town"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Estado:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="estado"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>C.P.:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="cp"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Correo Electronico:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="email"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Nombre de Usuario:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="user"
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
                            <Box width="100%" p={1}>
                                <Typography>Repetir contrasena:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="repeatPassword"
                                        onChange={obtenerDatos}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Al registrarte aceptas nuestras politicas de privacoidad dentro de la empresa</Typography>
                                <Box display="flex" justifyContent="center" p={1}>
                                    <FormControlLabel 
                                        control={<Checkbox />} 
                                        label="Politicas de Privacidad" 
                                        name="politics"
                                        onChange={obtenerDatos}
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
                                Registrarme
                            </Button>
                        </Box>
                    </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
