import { FormControl, Grid, IconButton, InputBase, MenuItem, Paper, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardTask from './CardTask';
import { Search } from '@mui/icons-material/';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    formInputFlex: {
        display: 'flex',
        marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
    },
}))

export default function Tasks() {

    const classes = useStyles();

    return (
        <>
            {/* <div className={classes.formInputFlex}>
                <Box width="100%" p={1}>
                    <Typography>Busqueda por Tarea:</Typography>
                    <Box ml={2} mt={1}  display="flex" justifyContent="flex-end">
                        <Paper >
                            <InputBase
                                fullWidth
                                placeholder="Buscar cotizacion..."
                            />
                            <IconButton>
                                <Search />
                            </IconButton>
                        </Paper>
                    </Box>
                </Box>
                <Box width="100%" p={1}>
                    <Typography>Prioridad:</Typography>
                    <Box display="flex" width="100%" >
                        <FormControl sx={{ m: 1, width: '100%' }}>
                            <Select
                                label="Age"
                                // onChange={obtenerDatos}
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
            </div> */}
            <Grid container>
                <CardTask/>
            </Grid>
        </>
    )
}
