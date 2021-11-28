import { Button, Card, CardActions, CardContent, Checkbox, Dialog, DialogActions, DialogTitle, FormControlLabel, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import NewTask from './NewTask'

export default function CardTask() {
    return (
        <Grid item lg={3} md={6} xs={12}>
            <Box p={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Nombre de Tarea
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Descripción
                        </Typography>
                        <Typography variant="body2">
                            Fecha Vencimiento
                        </Typography>
                        <Typography variant="body2">
                            25/10/2021
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box p={1}>
                                <Typography>
                                    Prioridad
                                </Typography>
                            </Box>
                            <Box p={1}>
                                <FormControlLabel
                                    control={<Checkbox color="success" />} 
                                    label="Completada" 
                                    name="politics"
                                    
                                />
                            </Box>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="right" sx={{flexGrow: 0}}>
                            <Box p={1}>
                                <NewTask type={"EDITAR"} />
                            </Box>
                            <DeleteTask />
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}

function DeleteTask() {

    const [open, setOpen] = useState(false);

    const handleClickOpen =()=>{
        setOpen(!open);
    };

    return(
        <>
            <Box p={1}>
                <Button 
                    size="large"
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
                                onClick={handleClickOpen}
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
