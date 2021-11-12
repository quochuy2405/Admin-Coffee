import axios from 'axios';
import { createContext, useReducer } from 'react';
import { authReducer } from './authReduce';

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authstate, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  const loginUser = async datafrom=> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      // const response = await axios.post('https://jsonplaceholder.typicode.com/todos/1',datafrom);
      if (response.data.userId) {
        localStorage.setItem('accessToken', response.data.userId);
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const signInUser = async datafrom=> {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      // const response = await axios.post('https://jsonplaceholder.typicode.com/todos/1',datafrom);
      if (response.data.userId) {
        localStorage.setItem('accessToken', response.data.userId);
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const authContextData = { loginUser,signInUser };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;