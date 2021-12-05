import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";

const Navbar = () => {
    const [{theme} , toggleTheme] = useContext(ThemeContext);
    console.log(theme,"theme");
    return (
        <div>
            <div className="navbar">
                <h2>This is Navbar </h2>
                <button className="toggle_btn" onClick={toggleTheme} >Toggle {theme === "light" ? "light" : "dark"} </button>
            </div>
        </div>
    )
}

export default Navbar;