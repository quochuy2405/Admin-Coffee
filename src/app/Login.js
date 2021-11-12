import { createContext } from 'react';
import { useState } from 'react';

 export const HandleLogin = createContext();

export default function Login ({ children }){
    const [Login,setLogin]=useState({
      
      name:'Đăng Nhập',
      value:1
      }
      )
        
    
  return <HandleLogin.Provider value={[Login,setLogin]}>{children}</HandleLogin.Provider>;
};
