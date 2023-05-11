import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { auth } from '../../../firebase/Firebase';
import { FormsInstruments } from '../../../helpers/forms';
import useRedirect from '../../../hooks/useRedirect';

import cls from "./index.module.scss";

const Register = () => {
  const { actions } = useRedirect();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    mode:"onSubmit"
  });

  const handleRegister = (data: any) => {
    createUserWithEmailAndPassword(auth , data.email , data.password)
      .then((res: any) => {
        console.log(data)
        localStorage.setItem("accessToken" , res.user.accessToken);
        actions.goToLogin();
        reset();
      })
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.register_page}>
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit(handleRegister)}>
            <Components.Divider>
              <Components.TextInput 
                type="email"
                placeholder='Email'
                {...register("email" , {
                  required: {
                    message: "This area should be a filled",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max" , "Email" , 25),
                    value:25
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
                    message: "This area should be a filled",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max" , "Password" , 25),
                    value:25
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
              <Components.AuthSubmit location="Sign Up"/>
            </Components.Divider>
            <Components.Divider>
              <Components.AuthGoogle location="singUp"/>
            </Components.Divider>
            <Components.Divider>
              <Components.AuthNavigate location="singUp"/>
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  );
};

export default Register;
