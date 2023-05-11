import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/Firebase';
import { IUser } from '../types/types';
import useRedirect from '../hooks/useRedirect';

interface IProvider {
  children:React.ReactNode
}

const AuthProviders: React.FunctionComponent<IProvider> = ({children}) => {
  const [user , setUser] = React.useState<IUser | null>(null);
  const [token , setToken] = React.useState<string | null | undefined>(null);
  const [render , setRender] = React.useState<string>("");
  const [state , setState] = React.useState<string| null>("screen");
  const { actions } = useRedirect();

  React.useEffect(() => {
    if(!localStorage.getItem("state")) {
      localStorage.setItem("state" , "screen");
    } else {
      const st = localStorage.getItem("state");
      setState(st);

      switch(st) {
        case "screen":
          actions.goToMain();
          break
        case "web":
          actions.goToMain();
          break
        case "admin": 
          actions.goToAdmin();
          break
        default:
          actions.goToMain();
      }
    }
  }, [state]);

  const changeState = React.useCallback((st: any) => {
    localStorage.setItem("state" , st);
    setState(st)
  } , [])

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");
    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(null)
    }
  }, []);

  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth , res => {
      setUser({
        displayName: res?.displayName || "",
        email: res?.email || "",
        avatar: res?.photoURL || ""
      })
    })
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.clear();
    setToken(undefined);
    setUser(null);
    setRender("Exit!");
    changeState("screen")
  }, [])

  React.useEffect(() => {
    getToken();
    getUser();
  }, [getToken , getUser , render])

  const values = React.useMemo(() => ({
    token,
    user,
    setRender,
    signOut,
    state,
    setState,
    changeState
  }), 
    [
      token,
      user,
      setRender,
      signOut,
      state,
      setState,
      changeState
    ])

  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default AuthProviders;
