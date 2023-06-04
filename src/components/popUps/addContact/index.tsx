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
    <div className={`fixed ${popUpSelector === 'add' ? 'block' : 'hidden'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-600 rounded-lg w-80 max-w-80 sm:w-full sm:max-w-sm mt-10 px-4 py-6 flex flex-col`}>
    <button onClick={() => setPopUpSelector('none')} className="self-end flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 hover:bg-indigo-500">
      <GrFormClose onClick={() => setPopUpSelector('none')} className="text-xl strocke-2" />
    </button>
    <h2 className="self-center text-lg font-semibold">Add contact</h2>
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Name"
        required={true}
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        id="phone-number"
        type="text"
        label="Phone number"
        placeholder="Phone number"
        required={true}
        error={errors.phone_number?.message}
        {...register('phone_number')}
      />
      <Input
        id="email"
        type="email"
        label="Email address"
        placeholder="Email address"
        required={true}
        error={errors.email?.message}
        {...register('email')}
      />
      <ButtonSubmit text="Add Contact" />
    </form>
  </div>
  )
}
