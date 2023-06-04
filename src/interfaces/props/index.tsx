import { NavigateFunction } from "react-router-dom"
import { IpopUpSelector } from "../vars"
import { IcontactEdit} from "../forms"


export interface IpropText  {
  text: string
}

export interface IdeleteBunttonPorps {
  text: string
  onClickFunction: () => Promise<void>
}

export interface IdeleteContactPopUpProps{
  contactId:string | undefined
  token:string | null
  setPopUpSelector:React.Dispatch<React.SetStateAction<IpopUpSelector>>
  popUpSelector:IpopUpSelector
}

export interface Icontact {
  created_at:string
  email:string
  id:string
  name:string
  phone_number:string
}

export interface IcontactCardProps {
  created_at:string
  email:string
  id:string
  name:string
  phone_number:string
  setContactFocus?: React.Dispatch<React.SetStateAction<IcontactEdit | null>>
}


export interface IaddContactProps {
  token: string | null
  popUpSelector: IpopUpSelector
  setPopUpSelector: React.Dispatch<React.SetStateAction<IpopUpSelector>>
}

export interface IeditContactProps {
  token: string | null
  popUpSelector: IpopUpSelector
  setPopUpSelector: React.Dispatch<React.SetStateAction<IpopUpSelector>>
  contact:  Icontact | null
  contactFocus: Icontact | null
}

export interface IcontactHeaderProps {
  setPopUpSelector:React.Dispatch<React.SetStateAction<IpopUpSelector>>
  navigate: NavigateFunction
  setContactFocus: React.Dispatch<React.SetStateAction<IcontactEdit | null>>
  popUpSelector:IpopUpSelector
}
