import { Button, Dialog, DialogContent, DialogTitle, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}));

export default function NewTask({type}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [datosTarea, setDatosTarea] = useState([]);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const obtenerDatos = (e) => {
        setDatosTarea({...datosTarea, [e.target.name]: e.target.value})
    }

    return (
        <>
            {type === "EDITAR" ? (
                <Button 
                    size="large"
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
                    <b>New Task</b>
                </Button>
            )}

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
                                        label="Age"
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
                                    name="title"
                                    type="date"
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
                                    size="small"
                                    name="title"
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
                                    name="description"
                                    onChange={obtenerDatos}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
