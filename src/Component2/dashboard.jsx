import { useContext } from "react"
import { Themechange } from "../Context/ThemeChangeColour"
import ContentBox from "./contextBox"
import {Switch} from "antd";

const Dashboard = () => {
  const [{iscolor,themeData},toggletheme] = useContext(Themechange);
  
  const currentTheme = themeData[iscolor];
  
return (
    <div style={{paddingLeft:"40px",
    paddingTop:"20px",
    width:"100%",
    height:"658px",
    background:currentTheme.background,
    color:currentTheme.color}}>
         <div style={{width:"400px"}}>
         <div style={{display:"flex"}}>
         <h1 style={{color:currentTheme.color,marginRight:"20px"}}>My DashBoard</h1>
         <Switch  onClick={toggletheme}  className="toggle_btn" />
         </div>
         <div style={{width:"300px",height:"280px",
    background:currentTheme.background,
    color:currentTheme.color}}>
           <div style={{display:"flex",margin:"0px 30px",
    background:currentTheme.background,
    color:currentTheme.color }}>
               <h5 style={{color:currentTheme.color}}>Active Users</h5>
               <h5 style={{marginLeft:"70px" , color:currentTheme.color}}>for August 2020</h5>
           </div>
           <ContentBox name={"Nrupul Dev"} address={"Bangalore,India"} level={"Professional Level 15"} point={"4723Points"} 
           src={"https://images.unsplash.com/photo-1624421998513-77a9ebb43d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8&w=1000&q=80"}/>
           <ContentBox name={"Sandhya"} address={"Bangalore,India"} level={"Professional Level 11"} point={"2339Points"} 
           src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4wYbqo-jRBOtjzRQyBqW25pruDDqGBhOJA&usqp=CAU"}/>
           <ContentBox name={"Elon Tusk"} address={"Califormia,USA"} level={"Professional Level 6"} point={"1884Points"} 
           src={"https://images.hindustantimes.com/img/2021/06/02/1600x900/2021-05-26T144916Z_1773739326_RC2QNN90CNZU_RTRMADP_3_TESLA-GERMANY-FIRE_1622161751176_1622638142482.JPG"}/>
         </div>
         </div>
    </div>
)
}
export default Dashboard