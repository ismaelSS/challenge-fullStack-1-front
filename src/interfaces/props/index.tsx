import { IpopUpSelector } from "../vars"


export interface IpropText  {
  text: string
}

export interface Icontact {
  created_at:string
  email:string
  id:string
  name:string
  phone_number:string
}


export interface IaddContactProps {
  token: string | null
  popUpSelector: IpopUpSelector
  setPopUpSelector: React.Dispatch<React.SetStateAction<IpopUpSelector>>
}
