import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie'


export const AuthContext = createContext ();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AunthProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const AunthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [isAuthenticathed, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading ] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
                console.log(res);
                setUser(res.data);
                setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data)
            console.log(error)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
           console.log(error);
           if(Array.isArray(error.response.data)){
            setErrors(error.response.data)
           }
           setErrors([error.response.data.message])
        }
    }

    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([]);
            },5000)
            return () => clearTimeout(timer)
        }
    },[errors])

    useEffect( () =>
    {
        async function checkLogin() 
        {
            const cookies = Cookies.get()
            console.log(cookies);
            if ( !cookies.token )
            {
                setIsAuthenticated( false )
                setLoading( false )
                return setUser( null )
            }

            try
            {
                const res = await verifyTokenRequest( cookies.token )
                console.log(res);
                if ( !res.data )
                {
                    setIsAuthenticated( false )
                    setLoading( false )
                    return;
                }
                setIsAuthenticated( true )
                setUser( res.data )
                setLoading( false )
            } catch ( error )
            {
                console.log( error )
                setIsAuthenticated( false )
                setUser( null )
                setLoading( false )
            }
        }
        checkLogin()

    }, [] )

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticathed,
            errors,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}