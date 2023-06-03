import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { api } from "../../../services/api"
import { Input } from "../../imput"
import { SubmitHandler, useForm } from "react-hook-form";
import { IcontactRegister } from "../../../interfaces/forms"
import { IaddContactProps } from "../../../interfaces/props";
import { ButtonSubmit } from "../../buttons/buttonSubmit";
import {GrFormClose} from 'react-icons/gr'

const schema = z.object({
  name: z.string(),
  phone_number: z.string(),
  email: z.string().email('must be an email')
})


export const AddContact = ({token, setPopUpSelector, popUpSelector}:IaddContactProps) => {

  const registerContactFunction = async (data:IcontactRegister) => {
    const response = await api.post("contacts/", data, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(response.status == 201){
      setPopUpSelector('none')
    }
  }

  const {register, handleSubmit, formState: {errors}} = useForm<IcontactRegister>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<IcontactRegister> = data => registerContactFunction(data);



  return(
    <div className={`flex ${popUpSelector==="add"?'fixed':'hidden'} flex-col border-blue-600 border-2 rounded-lg bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm max-w-80 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <button onClick={() => setPopUpSelector('none')} className="rounded-bl-lg bg-indigo-600 hover:bg-indigo-500 h-7 w-7 self-end flex items-center justify-center">
            <GrFormClose onClick={() => setPopUpSelector('none')} className="strocke-2 text-xl"/>
          </button>
          <h2 className="text-lg font-semibold self-center">Add contact</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <Input
              id="name"
              type="text"
              label="Name"
              placeholder="name"
              required={true}
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              id="phone number"
              type="text"
              label="Phone number"
              placeholder="phone number"
              required={true}
              error={errors.phone_number?.message}
              {...register('phone_number')}
            />

            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="e-mail"
              required={true}
              error={errors.email?.message}
              {...register('email')}
            />

            <ButtonSubmit text="Add Contact"/>
          </form>
        </div>
  )
}
