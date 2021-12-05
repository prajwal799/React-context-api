import { useContext } from "react"
import { ThemeContext } from "../Context/Theme"

const Form = () => {
const [{theme , themeData}] = useContext(ThemeContext);

const currentTheme = themeData[theme];

    return (
        <div style={{
        color:currentTheme.color,
        background:currentTheme.background}}>
            <form style={{padding:"20px"}}>
                <label >Name:</label>
                <input placeholder="Name" type="text" onChange={(e) => e.target.value} /><br /><br />
                <label>Title:</label>
                <input placeholder="Title"  type="text" /><br /><br />
                <label>Phone:</label>
                <input placeholder="Phone" type="number"  /><br /><br />
             <button>Submit</button>
            </form>
        </div>
    )
}

export default Form