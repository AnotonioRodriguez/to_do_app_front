import { CircularProgress, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import CardTask from './CardTask';
import clienteAxios from '../../Config/axios';
import { TaskContext } from '../../context/conextTasks';


export default function Tasks() {
    const [  setAlert ] = useState({ message: '', status: '', open: false });
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));
    const token = localStorage.getItem('tokenUser');
    const { update, setUpdate } = useContext(TaskContext);

    const [ tasks, setTasks] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [ reload, setReload] = useState(false);

    const getTasks = async () => {
        setLoading(true);
        await clienteAxios
            .get(`/tasks/${sesionUser._id}`,{
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            .then((res) => {
                setTasks(res.data);
                setLoading(false);
            }
        ).catch((err) => {
            if (err.response) {
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        getTasks();
        setReload(false);
        setUpdate(false);
    }, [reload, update]);

    if (loading || update)
		return (
			<Box display="flex" justifyContent="center" alignItems="center" height="30vh">
				<CircularProgress />
			</Box>
		);

    return (
        <>
            <Grid container>
                {tasks?.map((task) => {
                    return(
                        <CardTask 
                            task={task} 
                            setAlert={setAlert} 
                            setReload={setReload} 
                            setLoading={setLoading} 
                        />
                    );
                })}
            </Grid>
        </>
    )
}
