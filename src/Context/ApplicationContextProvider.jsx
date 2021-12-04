import React , {useState , createContext} from "react";

export const AppContext = createContext();

const ApplicationContextProvider = ({children}) => {
    const [isAuth , ToggleAuth] = useState(true);
  
    
    return (
     <AppContext.Provider value={[isAuth,ToggleAuth]}>
         {children}
     </AppContext.Provider>    
    )
}
export default ApplicationContextProvider;