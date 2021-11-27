import Layout from "../Components/Layout/Layout";
import Error from "../Pages/error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Tasks from "../Pages/Tasks/Tasks";


const routes = [
	{
		path: '/',
		component: Layout,
		exact: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true,
			},
			{
				path: '/login',
				component: Login,
				exact: true,
			},
			{
				path: '/register',
				component: Register,
				exact: true,
			},
			{
				path: '/tasks',
				component: Tasks,
				exact: true,
			},
			{
				component: Error
			}
		]
	}
];

export default routes;
