import React from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import '../index.css';
import { Link } from 'react-router-dom';


const ValidatedLoginForm = () => (
    <Formik 
    initialValues={{email: "", senha:""}}
    onSubmit={ (values, {setSubumiting }) => {
        console.log("Enviando");
        console.log(values);
    }}
    validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Necessário preenchimento"),
        password: Yup.string()
          .required("Senha incompleta.")
          .min(8, "Senha muito curta - deve conter 8 caracteres.")
          .matches(/(?=.*[0-9])/, "Senha deve conter um número.")
      })}    >
    {   
    props => {
        const { values, touched, errors, isSubmitinf, handleChange, handleBlur, handleSubmit } = props;
        return (
            <div className="loginForm">
            <center><label htmlFor="email">Login - Já sou cliente RIMMT</label></center>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Digite seu email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <div className="doidadobotao">
            <button type="submit" >
              Login
            </button>
            <br/>
            <Link className="button" to="./cadastro">
            <button className="button" type="submit"  >
              Não possuo cadastro
            </button>
            </Link>
            </div> 
          </form>
          </div>
        );
    }
    }


    </Formik>


);

export default ValidatedLoginForm;