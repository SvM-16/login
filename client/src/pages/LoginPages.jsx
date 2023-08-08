import { useForm } from "react-hook-form";

function LoginPages() {

    const { register, handleSubmit, formState: {errors}} = useForm()

    const onSubmited = handleSubmit (async (data)=>{
        console.log(data);
    })
    return (
        <div className="container min-w-full flex flex-col items-center mt-40 ">
            <form onSubmit={onSubmited}>
                <div className="container min-w-full flex flex-col items-center text-white py-2 px-4 mt-3 rounded">
                <input className='bg-zinc-300 text-white px-9 py-4 rounded-md my-2' type="email" {...register("email",{required:true})} placeholder='email' />
                {
                    errors.email && <p className='text-red-500'>Email is required</p>
                }
                <input className='bg-zinc-300 text-white px-9 py-4 rounded-md my-2' type="password" {...register("password",{required:true})} placeholder='password' />
                {
                    errors.password && <p className='text-red-500'>Password is required</p>
                }
                </div>
                <div className="container min-w-full flex flex-col items-center"><button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Iniciar</button></div>
            </form>
        </div>
    );
}


export default LoginPages;
