import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
    const [ update, setUpdate ] = useState(false);
    const [ alert, setAlert ] = useState({ message: "", status: "", open: false });

    return (
		<TaskContext.Provider value={
            { 
                alert, 
                setAlert,
                update,
                setUpdate,
            }
        }>
			{children}
		</TaskContext.Provider>
	);

}