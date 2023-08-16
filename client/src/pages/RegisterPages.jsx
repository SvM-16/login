import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPages() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { signup, isAuthenticathed, errors: RegisterErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticathed) navigate('/tasks');
    },[isAuthenticathed, navigate])

    const onSubmited = handleSubmit (async (values)=>{
        signup(values);
    })

    return (
        <div className="container min-w-full flex flex-col items-center mt-40 ">
        {
            RegisterErrors.map((error, i)=>(
                <div className='bg-red-500 text-black p-2' key={i}>
                    {error}
                </div>
            ))
        }
            <form onSubmit={onSubmited}>
                <div className="container min-w-full flex flex-col items-center text-white py-2 px-4 mt-3 rounded">
                <input className='bg-zinc-300 text-white px-9 py-4 rounded-md my-2' type="text" {...register("username",{required:true})} placeholder='username' /> 
                {
                    errors.username && <p className='text-red-500'>Usuario is required</p>
                }
                <input className='bg-zinc-300 text-white px-9 py-4 rounded-md my-2' type="email" {...register("email",{required:true})} placeholder='email' />
                {
                    errors.email && <p className='text-red-500'>Email is required</p>
                }
                <input className='bg-zinc-300 text-white px-9 py-4 rounded-md my-2' type="password" {...register("password",{required:true})} placeholder='password' />
                {
                    errors.password && <p className='text-red-500'>Password is required</p>
                }
                </div>
                <div className="container min-w-full flex flex-col items-center"><button type="submit" className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Registrado</button></div>
            </form>
        </div>
    );
}

export default RegisterPages;
