import * as React from 'react';
import PropTypes from 'prop-types';
import { Slide, AppBar, Toolbar, useScrollTrigger } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import Navegation from '../Navegation/Navegation';
import Footer from '../Footer/Footer';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Layout(props) {

    const {routes } = props;
    return (
        <React.Fragment >
            <HideOnScroll {...props}>
              <AppBar sx={{backgroundColor: "black"}} >
                <Toolbar>
                  <Navegation />
                </Toolbar>
              </AppBar>
            </HideOnScroll>
            <Toolbar />
            <div style={{minHeight: '85vh'}}>
                <LoadRoutes routes={routes} />
            </div>
            <div >
              <Footer />
            </div>  
        </React.Fragment>
    )
}

function LoadRoutes({routes}) {
    return(
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} path={route.path}  exact={route.exact} component={route.component}/>
            ))}
        </Switch>
    )
}
