import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../../components/imput"
import { ButtonSubmit } from "../../components/buttons/buttonSubmit"
import { Ilogin } from "../../interfaces/forms"

export const Login = () => {
  const {register, handleSubmit} = useForm<Ilogin>();
  const onSubmit: SubmitHandler<Ilogin> = data => console.log(data);

  return(
    <>
    <Header/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="email"
              required={true}
              {...register('email')}
            />

            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="password"
              required={true}
              {...register('password')}
            />

            <ButtonSubmit text="Sing in"/>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
