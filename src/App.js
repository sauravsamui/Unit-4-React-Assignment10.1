
import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import {ThemeContext} from "./Context/ThemeContext"
import { useContext } from 'react';
function App() {
  const {isLight,dark,light} = useContext(ThemeContext)
  
  return (
    <div style={{backgroundColor:isLight?light.backgroundColor:dark.backgroundColor,color:isLight?"black":dark.color}}>
      <Navbar/>
     <Form/>
    </div>
  );
}

export default App;
