import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import jwt_decode from 'jwt-decode';
import { Button, Checkbox, CircularProgress, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import clienteAxios from '../../Config/axios';
import SnackBarMessages from '../../Components/SnackBarMessages';

const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}))

export default function Register(props) {
    const classes = useStyles();
    const [ loading, setLoading ] = useState(false);
    const [ datosPersonales, setDatosPersonales ] = useState([]);
    const [ validate, setValidate ] = useState(false);
    const [ alert, setAlert ] = useState({ message: '', status: '', open: false });

    const obtenerDatos =(e)=>{
        setDatosPersonales({...datosPersonales, [e.target.name]: e.target.value})
    };

    const enviarDatos = async () => {
        if (!datosPersonales.name || !datosPersonales.nameUser
            || !datosPersonales.telephone || !datosPersonales.town 
            || !datosPersonales.password  || !datosPersonales.repeatPassword || !datosPersonales.email 
            || !datosPersonales.state || !datosPersonales.cp || datosPersonales.acceptPolicies === false) {
			setValidate(true);
            setAlert({
                open: true,
                message: 'Por favor completa todos los datos.',
                status: 'error'
            });
			return;
		}
        setLoading(true);

        await clienteAxios
            .post('/user/', datosPersonales)
            .then((res) => {
                setLoading(false);
                setDatosPersonales([]);
                const token = res.data.token;
			    const decoded = jwt_decode(token);
                localStorage.setItem('sesionUser', JSON.stringify(decoded));
			    localStorage.setItem('tokenUser', JSON.stringify(token));
                setAlert({
                    open: true,
                    message: 'Bienvenido usuario registrado con exito',
                    status: 'success'
                });
                props.history.push(`/tasks`);
            }
        ).catch((err) => {
            if (err.response) {
                setAlert({
                    open: true,
                    message: 'Al parecer el nombre de usuario que ingresaste ya existe.',
                    status: 'error'
                });
                setLoading(false);
            } else {
                setAlert({
                    open: true,
                    message: 'Error en el servidor',
                    status: 'error'
                });
                setLoading(false);
            }
        });
    };

    if (loading)
		return (
			<Box display="flex" justifyContent="center" alignItems="center" height="30vh">
				<CircularProgress />
			</Box>
		);

    return (
        <>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <SnackBarMessages alert={alert} setAlert={setAlert} />
                <Grid item lg={5} md={6} xs={12}>
                    <Box p={2}>
                    <Paper elevation={5}>
                        <Box p={1}>
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
                                        name="state"
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
                                        name="nameUser"
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
                                    control={
                                        <Checkbox 
                                            name="acceptPolicies"
                                            onChange={(e) =>
                                                setDatosPersonales({ ...datosPersonales, acceptPolicies: e.target.checked })
                                            }
                                        />
                                    } 
                                    label="Politicas de Privacidad" 
                                />
                                </Box>
                            </Box>
                        </div>
                        <Box p={2} textAlign="center">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                onClick={enviarDatos}
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
