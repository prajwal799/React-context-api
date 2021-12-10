import Placeholder from "./Placeholder";
import "./module.css"
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
import ThemechangeColour, { Themechange } from "../Context/ThemeChangeColour";

function ContentBox({name,address,level,point,src}){
    const [{iscolor , themeData}] = useContext(Themechange);

    const currentTheme = themeData[iscolor];
    return(
        <>
        <div style={{borderBottom:"1px solid grey" , background:currentTheme.background,color:currentTheme.color}}>
        <div style={{display:"flex",marginBottom:"0px",marginLeft:"20px" }}>
             <Placeholder src={src} />
             <div>
             <p className="first_chart marginTopText" >{name}</p>
             <p className="first_chart gray_color" >{address}</p>
             </div>
             <div style={{display:"flex",marginLeft:"80px",marginTop:"20px"}}>
                 <h1 style={{width:"5px",height:"5px",background:currentTheme.color,borderRadius:"50%",margin:"2px"}}></h1>
                 <h1 style={{width:"5px",height:"5px",background:currentTheme.color,borderRadius:"50%",margin:"2px"}}></h1>
                 <h1 style={{width:"5px",height:"5px",background:currentTheme.color,borderRadius:"50%",margin:"2px"}}></h1>
              </div>
         </div>
         <div style={{display:"flex",marginTop:"0px"}}>
        <p className="first_chart">{level}</p>
        <p className="first_chart marginLeft_Text">{point}</p>
         </div>
        </div>
        </>
    )
}
export default ContentBox;