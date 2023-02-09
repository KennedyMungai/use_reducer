import { createContext, useState } from 'react'

const AuthContext = createContext({
    isLoggedIn: false,
    onLogOut: () => { }
})

export const AuthContextProvider = (props) =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logoutHandler = () => 
    {
        setIsLoggedIn(false)
    }

    const loginHandler = () => 
    {
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext