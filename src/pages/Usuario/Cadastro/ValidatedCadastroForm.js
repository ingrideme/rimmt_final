import React from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import '../index.css';
import { Link } from 'react-router-dom';

const ValidatedCadastroForm = () => (
    <Formik
    initialValues={{ email: "", password: "", firstName: "", cpf: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Necessário preenchimento")
          .min(8, "Email deve ser válido"),
            password: Yup.string()
          .required("Senha incompleta.")
          .min(8, "Senha muito curta - deve conter 8 caracteres.")
          .matches(/(?=.*[0-9])/, "Senha deve conter um número."),
            confirmPassword: Yup.string()
            .required('Digite sua senha novamente')
            .oneOf([Yup.ref('password'), null], 'Senhas não correspondem'),
          firstName: Yup.string()
          .required("Necessário preenchimento")
          .min(10, "Digite seu nome completo"),
          cpf: Yup.string()
          .required("Necessário preenchimento")
          .min(11, "Digite seu cpf"),
          endereco: Yup.string()
          .required("Digite seu endereço")
          .min(10, "Digite endereço válido")
          .required("Digite endereço e número")
          .matches(/(?=.*[0-9])/, "Digite o número da casa."),

      })}    >
    {   
    props => {
        const { values, touched, errors, isSubmitinf, handleChange, handleBlur, handleSubmit } = props;
        return (
            <div className="loginForm">
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
            <input
              name="confirmPassword"
              type="password"
              placeholder="Digite sua senha novamente"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.confirmPassword && touched.confirmPassword && "error"}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="input-feedback">{errors.confirmPassword}</div>
            )}
            <label htmlFor="email">Nome</label>
            <input
              name="firstName"
              type="text"
              placeholder="Digite seu nome completo"
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.firstName && touched.firstName && "error"}
            />
            {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}
          <label htmlFor="email">Endereço</label>
            <input
              name="endereco"
              type="text"
              placeholder="Digite seu endereço"
              value={values.endereco}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.endereco && touched.endereco && "error"}
            />
            {errors.endereco && touched.endereco && (
              <div className="input-feedback">{errors.endereco}</div>
            )}
            <label htmlFor="email">CPF</label>
            <input
              name="cpf"
              type="number"
              placeholder="Digite seu cpf"
              value={values.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.cpf && touched.cpf && "error"}
            />
            {errors.cpf && touched.cpf && (
              <div className="input-feedback">{errors.cpf}</div>
            )}
            
            <div className="doidadobotao">
            <button className="button" type="submit" >
              Cadastrar
            </button>
            
            <Link className="button" to="./login">
            <button className="button" type="submit">
              Já tenho cadastro
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

export default ValidatedCadastroForm;