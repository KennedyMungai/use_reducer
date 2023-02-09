import { createContext, useState } from 'react'

const AuthContext = createContext({
    isLoggedIn: false,
    onLogOut: () => { },
    onLogin: (email, password) => { }
})

export const AuthContextProvider = (props) =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logoutHandler = () => 
    {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => 
    {
        localStorage.setItem('isLoggedIn', '1')
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