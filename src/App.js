import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import { Helmet } from 'react-helmet';
import { TasksProvider } from './context/conextTasks';

function App() {


  return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>To Do App Challenge</title>
			</Helmet>
			<Router>
				<TasksProvider>
					<Switch>{routes.map((route, index) => <RoutesWithSubRoutes key={index} {...route} />)}</Switch>
				</TasksProvider>
			</Router>
		</div>
  );
}

function RoutesWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component routes={route.routes} {...props} />}
		/>
	);
}

export default App;
