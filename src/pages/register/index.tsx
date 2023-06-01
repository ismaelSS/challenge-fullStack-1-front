import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { SubmitHandler, useForm } from "react-hook-form";
import { Iregister } from "../../interfaces/forms";
import { Input } from "../../components/imput";
import { ButtonSubmit } from "../../components/buttons/buttonSubmit";

export const Register = () => {
  // async const respoponse = () => {
  //   await api.post("contacts/", {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })}
  const {register, handleSubmit} = useForm<Iregister>();
  const onSubmit: SubmitHandler<Iregister> = data => console.log(data);

  return(
    <>
    <Header/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 pb-3">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <Input
              id="name"
              type="text"
              label="Name"
              placeholder="your name"
              required={true}
              {...register('name')}
            />

            <Input
              id="phone number"
              type="text"
              label="Phone number"
              placeholder="phone number"
              required={true}
              {...register('phone_number')}
            />

            <Input
              id="emial"
              type="email"
              label="Email address"
              placeholder="e-mail"
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

            <Input
              id="confirm password"
              type="password"
              label="Confirm password"
              placeholder="confirm password"
              required={true}
            />

            <ButtonSubmit text="Register"/>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
