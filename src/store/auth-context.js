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

    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext