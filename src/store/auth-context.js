import { createContext } from 'react'

const AuthContext = createContext({
    isLoggedIn: false,
    onLogOut: () => { }
})

export const AuthContextProvider = (props) =>
{
    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext