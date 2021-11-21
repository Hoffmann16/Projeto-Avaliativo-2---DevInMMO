import React, { createContext, useContext, useReducer} from "react";
import GlobalStyle from '../Styles/global';
import {ThemeProvider} from 'styled-components'
import badass from '../Styles/themes/badass'
import pikachu from '../Styles/themes/pikachu'

const ThemesContext = createContext()

const handlerTheme = () => {
    const theme_storage = localStorage.getItem('theme')
    if(localStorage.getItem('theme')){
        if(theme_storage === badass.title){
            return badass
        } else if (theme_storage === pikachu.title){
            return pikachu
        }
    } else{
        return badass
    }

}

const ThemesProvider = ({children}) => {
    const [state,dispatch] = useReducer(themeReducer,handlerTheme())
    
    return(
        <ThemesContext.Provider value={{state,dispatch}}>
            <ThemeProvider theme={state}>
            <GlobalStyle />
            {children}
            </ThemeProvider>
        </ThemesContext.Provider>
    )
}




const themeReducer =(state,action) =>{
    switch (action.type) {
        case "badass":
            return badass
            case 'pikachu':
                return pikachu
                
                default:
                    return state
                }
            }
            
            const useSwitchTheme = () => {
                const themecontext = useContext(ThemesContext)
                return themecontext
            }
            
            export {ThemesProvider, useSwitchTheme}