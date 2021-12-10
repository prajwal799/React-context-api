import { useContext } from 'react';
import './App.css';
import Auth from './Component/Auth';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import Dashboard from './Component2/dashboard';
import SlideBar from './Component2/Slidebar';
import { Themechange } from './Context/ThemeChangeColour';

function App() {
  const [{iscolor,themeData}] = useContext(Themechange);
  const currentTheme = themeData[iscolor];
  return (
    <div className="App">
      {/* <h1>Login</h1>
      <Auth /> */}
      {/* <Body /> */}
      {/* <Navbar />
      <Form />
      <Footer /> */}
      <div style={{display:"flex"}}>
      <SlideBar />
      <h1 style={{width:"1px",height:"600px",background:currentTheme.color}}></h1>
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
