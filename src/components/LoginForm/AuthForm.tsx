import { useState } from "react";
import css from "./styles.module.css";
import svg from "../../assets/sprite/sprite.svg";
import { Formik, Form, Field } from "formik";
import register from "../../services/auth";
import logIn from "../../services/logIn";
import { LoginSchema, SignupSchema } from "../../utils/validationSchemas";
import { Notify } from "notiflix";

interface LoginFormProps {
  onClose: () => void;
  isRegister: boolean;
}
interface MyFormValues {
  email: string;
  password: string;
  name?: string;
}

const AuthForm = ({ onClose, isRegister }: LoginFormProps) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const initialValues: MyFormValues = { email: "", password: "", name: "" };

  const showPass = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <div className={css.formWrapper}>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width={32} height={32}>
          <use href={`${svg}#icon-x`} />
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={isRegister ? SignupSchema : LoginSchema}
        onSubmit={({ email, password, name }): void => {
          if (isRegister && name) {
            register(email, password, name)
              .then((data) => console.log(data))
              .catch((e) => Notify.failure(e.message));
          } else {
            logIn(email, password)
              .then((d) => console.log(d))
              .catch((e) => Notify.failure("Check email or password"));
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <p className={css.formTitle}>Log In</p>
            {isRegister ? (
              <p className={css.formText}>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information.
              </p>
            ) : (
              <p className={css.formText}>
                Welcome back! Please enter your credentials to access your
                account and continue your search for a psychologist.
              </p>
            )}
            {isRegister && (
              <label
                className={`${css.label} ${
                  errors.name && touched.name && css.error
                }`}
              >
                <Field placeholder="Name" type="text" name="name" />
              </label>
            )}
            <label
              className={`${css.label} ${
                errors.email && touched.email && css.error
              }`}
            >
              <Field placeholder="Email" type="email" name="email" />
            </label>
            <label
              className={`${css.label} ${css.password} ${
                errors.password && touched.password && css.error
              }`}
            >
              <Field
                name="password"
                placeholder="Password"
                type={isShowPass ? "text" : "password"}
              />
              <button
                className={css.showPassBtn}
                onClick={showPass}
                type="button"
              >
                <svg width={20} height={20}>
                  <use
                    href={
                      isShowPass ? `${svg}#icon-eye` : `${svg}#icon-eye-off`
                    }
                  />
                </svg>
              </button>
            </label>
            <button type="submit" className={css.formSubBtn}>
              {isRegister ? "Sign Up" : "Log In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
