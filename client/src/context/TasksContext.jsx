import { createContext, useContext } from 'react'

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used within a TasksProvider')
    }

    return context;
}

export function TaskProvider({ chidren }){
    const [ taks,setTaks ] = useState([]);

    return(
        <TaskContext.Provider value={{taks}}>
            { chidren }0
        </TaskContext.Provider>
    )
}