import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { auth } from '../../../firebase/Firebase';
import { FormsInstruments } from '../../../helpers/forms';
import useRedirect from '../../../hooks/useRedirect';
import cls from "./index.module.scss";
import { Providers } from '../../../providers';

const Login = () => {
  const { actions } =  useRedirect()
  const { setRender } = Providers.useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm(({
    mode: "onSubmit"
  }));

  const handleLogin = (data: any) => {
    signInWithEmailAndPassword(auth , data.email , data.password)
      .then((res: any) => {
        localStorage.setItem("accessToken" , res.user.accessToken)
        actions.goToMain();
        reset();
        setRender("Reload!")
      })
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.login_page}>
          <h2>Log In</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <Components.Divider>
              <Components.TextInput 
                type='email'
                placeholder='Email'
                {...register("email" , {
                  required: {
                    message: "This area should be a filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max" , "Email" , 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthOfValue("min" , "Email" , 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.email && errors?.email.message}/>
            </Components.Divider>
            <Components.Divider>
              <Components.TextInput 
                type='password'
                placeholder='Password'
                {...register("password" , {
                  required: {
                    message: "This area should be a filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max" , "Password" , 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthOfValue("min" , "Password" , 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.password && errors?.password.message}/>
            </Components.Divider>
            <Components.Divider>
              <Components.AuthSubmit location='Log In'/>
            </Components.Divider>
            <Components.Divider>
              <Components.AuthGoogle location="signIn"/>
            </Components.Divider>
            <Components.Divider>
              <Components.AuthNavigate location='signIn'/>
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Login;
