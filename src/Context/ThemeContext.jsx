import {useState,createContext} from "react";
import { themesColor } from "../Component/style";
export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
   const [theme,setTheme] = useState("light");
   let {dark,light} = themesColor
  
   let toggleTheme =()=>{
      
       if(theme==="light"){
           setTheme("dark")
       }else{
           setTheme("light")
       }
   }

   return (
       <ThemeContext.Provider value={{isLight:theme==="light",dark,light,toggleTheme}}>{children}</ThemeContext.Provider>
   )
}