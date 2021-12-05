import './App.css';
import Auth from './Component/Auth';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Form from './Component/Form';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>Login</h1>
      <Auth /> */}
      {/* <Body /> */}
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
