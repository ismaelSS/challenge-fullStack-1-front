import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { SubmitHandler, useForm } from "react-hook-form";
import { Iregister } from "../../interfaces/forms";
import { Input } from "../../components/imput";
import { ButtonSubmit } from "../../components/buttons/buttonSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().nonempty('name is required'),
  phone_number: z.string().nonempty('phone number is required'),
  email: z.string().email('must be an email').nonempty('email is required'),
  password: z.string().nonempty('password is required')
    .min(8, 'password must be 8 characters')
    .regex(/[a-z]/, 'must have a lowercase letter')
    .regex(/[A-Z]/, 'must have an uppercase letter')
    .regex(/\d/, 'must have a number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'must have a special character'),
  confirm_password: z.string().nonempty('please confirm the password')
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

export const RegisterPage = () => {
  const registerFunction = async (data:Iregister) => {
    const response = await api.post("users/", data)
    if(response.status == 201){
      navigate('/login')
    }
  }
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<Iregister>({
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Iregister> = data => registerFunction(data);

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
              id="email"
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
              error={errors.password?.message}
              {...register('password')}
            />

            <Input
              id="confirm password"
              type="password"
              label="Confirm password"
              placeholder="confirm password"
              required={true}
              error={errors.confirm_password?.message}
              {...register('confirm_password')}
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
