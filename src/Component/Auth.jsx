import { useContext, useState } from "react";
import App from "../App";
import { AppContext } from "../Context/ApplicationContextProvider";
import Token from "./Token";

const Auth = () => {
    const [email , setEmail] = useState("");
    const [password ,setPassowrd] = useState("");
    const [istoken ,setToken] = useState(false);
    const [isLaoding , setIsLoading] = useState(false);
    const [iserror , setIsError] = useState(false);
    const [loginbtn ,setLoginbtn] =useState(true);
  
     const [isAuth , toggleAuth] = useContext(AppContext);
     
   
 
      const handleSubmit = () => {
           
          setIsLoading(true);
         Token ({email, password})
         .then((res) => {
             console.log(res.data.token);
             setToken(true);
             setIsLoading(false);
             setLoginbtn(false);
             toggleAuth(false);
             setIsError(false)
         })
         .catch((err)=>{
             console.log('xvnc,' , loginbtn)
             setIsError(true);
         })
      }
      if(iserror){
          return <h1>
               <div className="navbar">
          <button onClick={() => setLoginbtn(true)}>Login</button>
            <button onClick={() => setLoginbtn(false)}>LoginOut</button>
          </div>
          <h3>Email and password is not correct</h3>
               {loginbtn ? 
             (<div>

                 <h1>Login</h1>
                 <input  placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}  />
                <input  placeholder="Password" type="password" onChange={(e) => setPassowrd(e.target.value)} />
             <button onClick={  handleSubmit}>Submit</button>
             </div>) : (<h1></h1>)
               }
          </h1>
      }
      if(isLaoding){
          return <h1>...Loading</h1>
      }
    return(
        <div>
          <div className="navbar">
          <button onClick={() => setLoginbtn(true)}>Login</button>
            <button onClick={() => setLoginbtn(false)}>LoginOut</button>
          </div>
            {loginbtn ? 
             (<div>

                 <h1>Login</h1>
                 <input  placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}  />
                <input  placeholder="Password" type="password" onChange={(e) => setPassowrd(e.target.value)} />
             <button onClick={  handleSubmit}>Submit</button>
             </div>) : (<h1></h1>)
               }
            
        </div>
    )
}
export default Auth;