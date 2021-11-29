import React from 'react';
import clienteAxios from '../../Config/axios';
import { Button } from '@mui/material'

export default function CompleteTask({task, setReload, setLoading, setAlert}) {
    const sesionUser = JSON.parse(localStorage.getItem('sesionUser'));
    const tokenUser = JSON.parse(localStorage.getItem('tokenUser'));

    const completeTask = async (task, complete) => {
        setLoading(true);
        await clienteAxios
		.put(
            `/tasks/completeTask/${sesionUser._id}/${task._id}`, 
            {
              "complete": complete
            },
            {
				headers: {
					Authorization: `bearer ${tokenUser}`
				}
			}
        )
        .then((res) => {
            setReload(true);
            setLoading(false);
        }).catch((err) => {
            setReload(true);
            setLoading(false);
        });
    };

    return (
        <div>
            <Button
                variant="contained" 
                style={
                    task.complete ? (
                        { backgroundColor: '#4caf50', color: "white"}
                    ) : null
                }
                onClick={
                    () => {
                        completeTask(task, !task.complete)
                    }}
            >
                {console.log(task.complete)}
                {task.complete === false ? "Pediente" : "Completa"}
            </Button>
        </div>
    )
}