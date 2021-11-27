import Layout from "../Components/Layout/Layout";


const routes = [
	{
		path: '/',
		component: Layout,
		exact: false,
		routes: [
			{
				path: '/',
				component: "",
				exact: true,
			},
			{
				component: ""
			}
		]
	}
];

export default routes;
