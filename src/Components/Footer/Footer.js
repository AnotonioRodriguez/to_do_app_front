import { Avatar, Grid,  IconButton,  Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import imagen from '../../img/Perfil.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles(() =>({
    fontColor:{
        color: "white",
        fontSize: 19
    }
}));

// https://www.linkedin.com/in/brayan-antonio-rodriguez-flores-9469a9211/
// https://www.occ.com.mx/curriculo

export default function Footer() {

    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item lg={4} xs={12}>
                    <Box p={1} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}}}>
                        <Box textAlign="center" display="flex" justifyContent="center" >
                            <Avatar component={Link} to={`/`} src={imagen} alt="Remy Sharp" sx={{ width: 130, height: 130 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box textAlign="center">
                        <Box p={1}>
                            <Typography className={classes.fontColor}>
                                Brayan Antonio Rodriguez Flores
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.fontColor}>
                                Front-End Deveeloper
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.fontColor}>
                                San Isidro #54, Autlan Navarro Jal, C.P. 48930
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography className={classes.fontColor}>
                                Tel: 317-387-3462
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box p={1}>
                        <Typography className={classes.fontColor} >
                            Sigueme en:
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Box>
                            <IconButton
                                href="https://www.facebook.com/brayanpoday.rodriguez/"
                                target="_blank"
                            >
                                <FacebookIcon style={{fontSize: 60, color: "white"}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton
                                href="https://www.instagram.com/ba_rf_21/"
                                target="_blank"
                            >
                                <InstagramIcon style={{fontSize: 60, color: "white"}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
