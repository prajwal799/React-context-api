import axios from "axios";
const Token = ({email ,password}) => {
    if(!email || !password){
        return Promise.reject("Email or Password is invalid");
    }
    const config = {
        method:"post",
        url: "https://reqres.in/api/login",
         data :  {
            email,
            password
        }
    }
    return axios(config);
    
}
export default Token;