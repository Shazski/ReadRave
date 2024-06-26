import { ErrorMessage, Field, Form, Formik } from "formik"
import { IUser } from "../../Interfaces/Iuser"
import { useTypeDispatch, useTypeSelector } from "../../hooks"
import { login } from "../../redux/actions/user/userActions"
import { userLoginSchema } from "../../validations/userLoginSchema"
import { Link } from "react-router-dom"

const Login = () => {
  const { error } = useTypeSelector((state) => state.user)
  const dispatch = useTypeDispatch()
  return (
    <div className="grid place-items-center h-[88vh]">
      <h1>Test Email:test@gmail.com</h1>
      <h1>Test Password:Test@1234</h1>
      <Formik onSubmit={async (values: IUser) => {
        dispatch(login(values))
      }}
        initialValues={{ email: "", password: "" }} validationSchema={userLoginSchema}>
        <Form className="flex flex-col gap-y-6">
          {
            error && <h1 className="text-red-600 font-semibold ">{error}</h1>
          }
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <Field type="text" name="email" className="grow" placeholder="Email" />
            </label>
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <Field type="password" name="password" placeholder="Password" className="grow" />
            </label>
            <ErrorMessage name="password" component="div" className="text-red-600 break-all" />
          </div>
          <button type="submit" className="btn btn-accent">Submit</button>
        </Form>
      </Formik>
        <h1 className="text-accent">Dont have an account? <Link className="cursor-pointer" to={'/register'}>  Register</Link> </h1>
    </div >
  )
}

export default Login