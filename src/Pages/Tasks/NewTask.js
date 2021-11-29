import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import SnackBarMessages from '../../Components/SnackBarMessages';
import clienteAxios from '../../Config/axios';
import { TaskContext } from '../../context/conextTasks';

const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}));

export default function NewTask({type, task}) {
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));
    const token = localStorage.getItem('tokenUser');
    const { update, setUpdate } = useContext(TaskContext);

    const classes = useStyles();

    const [ open, setOpen] = useState(false);
    const [ datosTarea, setDatosTarea] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [ alert, setAlert ] = useState({ message: '', status: '', open: false });

    const handleClickOpen = () => {
        setOpen(!open);
        if (task) {
            setDatosTarea(task);
        }
    };

    const obtenerDatos = (e) => {
        setDatosTarea({...datosTarea, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        if (task) {
            setDatosTarea(task);
        }
    }, [])


    const createTasks = async (task) => {
        if (!datosTarea.title || !datosTarea.priority ) {
            setAlert({
                open: true,
                message: 'Por lo menos la prioridad y el titutlo son obligatorios.',
                status: 'error'
            });
			return;
		}
        setLoading(true);
        if(type === "EDITAR"){
            await clienteAxios
            .put(`/tasks/${sesionUser._id}/${task}`, datosTarea,{
				headers: {
					Authorization: `bearer ${token}`
				}
			})
            .then((res) => {
                setLoading(false);
                setUpdate(!update);
                handleClickOpen();
                setAlert({
                    open: true,
                    message: res.data.message,
                    status: 'success'
                });
            }
            ).catch((err) => {
                setUpdate(!update);
                handleClickOpen();
                if (err.response) {
                    setAlert({
                        open: true,
                        message: 'Oh no ocurrio un problema en el registro',
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
        }else{
            await clienteAxios
                .post(`/tasks/${sesionUser._id}`, datosTarea)
                .then((res) => {
                    setLoading(false);
                    handleClickOpen();
                    setUpdate(!update);
                    setAlert({
                        open: true,
                        message: res.data.message,
                        status: 'success'
                    });
                }
            ).catch((err) => {
                handleClickOpen();
                setUpdate(!update);
                if (err.response) {
                    setAlert({
                        open: true,
                        message: 'Oh no ocurrio un problema en el registro',
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
        }
    };

    return (
        <>
            {type === "EDITAR" ? (
                <Button 
                    size="medium"
                    color="primary"
                    variant="outlined"
                    onClick={handleClickOpen}
                >
                    Editar
                </Button>
            ):(
                <Button
                    onClick={handleClickOpen}
                    sx={{ my: 2, pl: 3, color: 'white', display: 'block' }}
                >
                    <b>NUEVA TAREA</b>
                </Button>
            )}
            <SnackBarMessages alert={alert} setAlert={setAlert} />
            <Dialog
                open={open}
                onClose={handleClickOpen}
                fullWidth
                maxWidth='xs'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Box textAlign="center">
                        <Typography variant="h6">
                            {type === "EDITAR" ? (
                                <b>Editar Tarea</b>
                            ) :(
                                <b>Nueva Tarea</b>
                            )}
                        </Typography>
                    </Box>
                </DialogTitle>

                <DialogContent>
                    <div className={classes.formInputFlex}>
                        <Box width="100%" p={1}>
                            <Typography>Tarea:</Typography>
                            <Box display="flex">
                                <TextField
                                    fullWidth
                                    size="small"
                                    name="title"
                                    value={datosTarea ? datosTarea.title : ""}
                                    onChange={obtenerDatos}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                    </div>
                    <div className={classes.formInputFlex}>
                        <Box width="100%" p={1}>
                            <Typography>Prioridad:</Typography>
                            <Box display="flex" width="100%" >
                                <FormControl  sx={{ m: 1, width: '100%' }}>
                                    <Select
                                        name="priority" 
                                        value={datosTarea ? datosTarea.priority : ""}
                                        onChange={obtenerDatos}
                                    >
                                        <MenuItem value="NINGUNA">
                                            <em>Niguna</em>
                                        </MenuItem>
                                        <MenuItem value={"ALTA"}>Alta</MenuItem>
                                        <MenuItem value={"MEDIA"}>Media</MenuItem>
                                        <MenuItem value={"BAJA"}>Baja</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </div>
                    <div className={classes.formInputFlex}>
                        <Box width="100%" p={1}>
                            <Typography>Fecha Vencimiento:</Typography>
                            <Box display="flex">
                                <TextField
                                    fullWidth
                                    size="small"
                                    name="expiration_date"
                                    type="date"
                                    value={datosTarea.expiration_date ? datosTarea.expiration_date : ""}
                                    onChange={obtenerDatos}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                        <Box width="100%" p={1}>
                            <Typography>Hora Vencimiento:</Typography>
                            <Box display="flex">
                                <TextField
                                    fullWidth
                                    value={datosTarea ? datosTarea.expiration_hour : ""}
                                    size="small"
                                    name="expiration_hour"
                                    type="time"
                                    onChange={obtenerDatos}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                    </div>
                    <div className={classes.formInputFlex}>
                        <Box width="100%" p={1}>
                            <Typography>Descripción:</Typography>
                            <Box display="flex">
                                <TextField
                                    fullWidth
                                    size="small"
                                    multiline
                                    rows={3}
                                    value={datosTarea ? datosTarea.description : ""}
                                    name="description"
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
                            size="medium"
                            onClick={() => createTasks(datosTarea ? datosTarea._id : "")}
                        >
                            {type==="EDITAR" ? "editar" : "registrar"}
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
