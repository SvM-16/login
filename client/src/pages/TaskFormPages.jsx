import { useForm } from "react-hook-form"
import { useTasks } from "../context/TasksContext";
import { Fragment } from "react";

const TaskFromPages = () => {

    const { register, handleSubmit } = useForm();
    const {createTask } = useTasks()

    const onSubmit = handleSubmit ((data) => {
        createTask(data);
    })

    return(
        <Fragment>
            <div className="container min-w-full flex flex-col items-center max-w-md w-full- p-44 rounded-md ">
                <form onSubmit={onSubmit} >
                    <input type="text" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md"  placeholder="Title" {...register("title")}/>
                    <textarea rows="3" className=" min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md" placeholder="descripción" {...register("description")}></textarea>
                    <div className="container min-w-full flex flex-col items-center"><button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">SAVE</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default TaskFromPages