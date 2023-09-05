import { useForm } from "react-hook-form"

const TaskFromPages = () => {

    const { register, hanleSubmit } = useForm();

    // const onSubmit = hanleSubmit ((data) = {
    //     console.log(data);
    // })

    return(
        <>
            <div className="container min-w-full flex flex-col items-center max-w-md w-full- p-44 rounded-md ">
                <form action="" >
                    <input type="text" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md"  placeholder="Title"/>
                    <textarea rows="3" className=" min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md" placeholder="descripción"></textarea>
                    <div className="container min-w-full flex flex-col items-center"><button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">SAVE</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskFromPages