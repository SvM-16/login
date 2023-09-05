import { useAuth } from "../context/AuthContext"

const TaskPages = () => {

    const { user } = useAuth()
    console.log(user);
    
    return(
        <div>
            <h1>tasks</h1>
        </div>
    )
}

export default TaskPages