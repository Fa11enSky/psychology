import { useState } from "react";
import css from "./styles.module.css";
import svg from "../../assets/sprite/sprite.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import register from "../../services/auth";
import { auth } from "../../config/firebaseConfig";
interface LoginFormProps {
  onClose: () => void;
}
interface MyFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(8).max(64),
});
const LoginForm = ({ onClose }: LoginFormProps) => {
  const [isShowPass, setIsShowPass] = useState(false);
  console.log(auth.currentUser)

  const initialValues: MyFormValues = { email: "", password: "" };

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
        validationSchema={SignupSchema}
        onSubmit={({ email, password }): void => {
          register(email, password,'eredar')
            .then((data) => console.log(data))
            .catch((e) => console.log('e'));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <p className={css.formTitle}>Log In</p>
            <p className={css.formText}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for a psychologist.
            </p>
            <label
              className={`${css.label} ${
                errors.email && touched.email && css.error
              }`}
            >
              <Field placeholder="Email" type="email" name="email" />
              {/* {(errors.email&&touched.email) && <div>{errors.email}</div>} */}
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
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
