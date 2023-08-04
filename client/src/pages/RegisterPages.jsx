import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth.js'

function RegisterPages() {

    const { register, handleSubmit } = useForm();

    return (
        <div className='bg-zinc-800 m-10 max-w-md p-10 rounded-md '>
            <form onSubmit={handleSubmit( async (values)=>{
                console.log(values);
                const res = await registerRequest(values)
                console.log(res);
            })}>
                <div className='text-white py-2 px-4 mt-3 rounded'>
                <input className='bg-zinc-600 text-white px-9 py-4 rounded-md my-2' type="text" {...register("username",{required:true})} placeholder='username' />
                <input className='bg-zinc-600 text-white px-9 py-4 rounded-md my-2' type="email" {...register("email",{required:true})} placeholder='email' />
                <input className='bg-zinc-600 text-white px-9 py-4 rounded-md my-2' type="password" {...register("password",{required:true})} placeholder='password' />
                </div>
                <div className="container min-w-full flex flex-col items-center"><button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Registrdo</button></div>
            </form>
        </div>
    );
}

export default RegisterPages;
