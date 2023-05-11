
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth , joinWithGoogle } from "../../../firebase/Firebase";
import { Providers } from '../../../providers';
import useRedirect from '../../../hooks/useRedirect';

import cls from "./index.module.scss";

interface IAuth {
  location: string
}

const AuthGoogle: React.FunctionComponent<IAuth> = ({location}) => {
  const { setRender } = Providers.useAuth();
  const { actions } = useRedirect();

  const googleIcon = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";

  const handleAuthWithGoogle = () => {
    signInWithPopup(auth , joinWithGoogle)
      .then((res: any) => {
        localStorage.setItem("accessToken" , res?.user.accessToken);
        localStorage.setItem("refreshToken" , res?._tokenResponse.refreshToken);
        actions.goToMain();
        setRender("Reload!")
      })
  }

  return (
    <p className={cls.authGoogle} onClick={handleAuthWithGoogle}>
      {
        location === "signIn"
          ? "Or you can Log in with"
          : "Or you can Sign up with"
      }
      <img src={googleIcon} alt=''/>
    </p>
  )
}

export default AuthGoogle;
