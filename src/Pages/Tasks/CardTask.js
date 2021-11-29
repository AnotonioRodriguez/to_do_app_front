import { Button, Card, CardActions, CardContent,  Chip, Dialog, DialogActions, DialogTitle,  Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import clienteAxios from '../../Config/axios'
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import moment from 'moment';

moment.locale('es');

export default function CardTask({task, setReload,setLoading, setAlert}) {

    return (
        <Grid item lg={3} md={6} xs={12}>
            <Box p={2}>
                <Paper elevation={5}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6">
                               {task.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                               {task.description}
                            </Typography>
                            <Typography variant="body2">
                                {task?.expiration_date}
                            </Typography>
                            <Typography variant="body2">
                                Creada: {moment(task.creation_date).format("MMM Do YY")}
                            </Typography>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Box p={1}>
                                    {task.priority === "BAJA" ? (
                                        <Chip label="BAJA" color="success" />
                                    ) : task.priority === "MEDIA" ? (
                                        <Chip label="MEDIA" color="warning" />
                                    ) : (
                                        <Chip label="ALTA" color="error" />
                                    )}
                                </Box>

                                <Box p={1}>
                                    <CompleteTask 
                                        task={task}
                                        setReload={setReload} 
                                        setAlert={setAlert} 
                                        setLoading={setLoading}
                                    />
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="flex-end" sx={{flexGrow: 0}}>
                                <Box p={1}>
                                    <NewTask type={"EDITAR"} task={task} />
                                </Box>
                                <DeleteTask 
                                    task={task._id} 
                                    setReload={setReload} 
                                    setAlert={setAlert} 
                                    setLoading={setLoading} 
                                />
                            </Box>
                        </CardActions>
                    </Card>
                </Paper>
            </Box>
        </Grid>
    )
}

function DeleteTask({task, setReload, setLoading, setAlert}) {
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));
    const tokenUser = JSON.parse(localStorage.getItem('tokenUser'));

    const [open, setOpen] = useState(false);

    const handleClickOpen =()=>{
        setOpen(!open);
    };

    const deleteTask = async () => {
        setLoading(true);
        await clienteAxios
            .delete(`/tasks/${sesionUser._id}/${task}`,{
				headers: {
					Authorization: `bearer ${tokenUser}`
				}
			})
            .then((res) => {
                handleClickOpen();
                setLoading(false);
                setReload(true);
                setAlert({
                    open: true,
                    message: res.data.message,
                    status: 'success'
                });
            }
        ).catch((err) => {
            handleClickOpen();
            setReload(true);
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
    };

    return(
        <>
            <Box p={1}>
                <Button 
                    size="medium"
                    color="error"
                    variant="outlined"
                    onClick={handleClickOpen}
                >
                    Eliminar
                </Button>
            </Box>

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
                            Esta seguro que desea eliminar esta tarea?
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogActions>
                    <Box display="flex">
                        <Box p={1}>
                            <Button
                                color="error"
                                variant="contained"
                                onClick={deleteTask}
                            >
                                ELIMINAR
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button
                                variant="contained"
                                onClick={handleClickOpen}
                            >
                                CANCELAR
                            </Button>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
};
