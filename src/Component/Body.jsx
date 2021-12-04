import { useContext } from "react"
import { AppContext } from "../Context/ApplicationContextProvider"

function Body(){
const [isAuth] = useContext(AppContext);
if (!isAuth) {
  return (
    <div>
      <div>Heu! Welcome back!</div>
      <div>Would you like to continue with your application</div>
    </div>
  );
} else {
  return <div>Please sign in to continue</div>;
}
}

export default Body;