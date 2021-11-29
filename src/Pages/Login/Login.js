import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button,  CircularProgress,  Grid, Paper, TextField, Typography } from '@mui/material';
import clienteAxios from '../../Config/axios';
import jwt_decode from 'jwt-decode';
import { Box } from '@mui/system';
import imagen from '../../img/BlackStones.jpg';
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

export default function Login(props) {

    const classes = useStyles();
    const [login, setLogin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ alert, setAlert ] = useState({ message: '', status: '', open: false });
    const obtenerDatos =(e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    };

    const loginUser = async () => {
        if (!login.password || !login.nameUser) {
            setAlert({
                open: true,
                message: 'Por favor completa todos los datos.',
                status: 'error'
            });
			return;
		}
        setLoading(true);

        await clienteAxios
            .post('/user/loginUser/', login)
            .then((res) => {
                setLoading(false);
                const token = res.data.token;
			    const decoded = jwt_decode(token);
                localStorage.setItem('sesionUser', JSON.stringify(decoded));
			    localStorage.setItem('tokenUser', JSON.stringify(token));
                setAlert({
                    open: true,
                    message: 'Bienvenido',
                    status: 'success'
                });
                props.history.push(`/tasks`);
            }
        ).catch((err) => {
            if (err.response) {
                setAlert({
                    open: true,
                    message: 'Al parecer los datos estan incorrectos',
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
            <SnackBarMessages alert={alert} setAlert={setAlert} />
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
                                        type="password"
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
                                onClick={loginUser}
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
