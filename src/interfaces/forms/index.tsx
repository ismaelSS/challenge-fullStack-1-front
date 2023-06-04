export type Ilogin = {
  email:string,
  password:string,
}


export type Iregister ={
  name:string,
  email:string,
  password:string,
  confirm_password:string,
  phone_number:string,
}

export type IcontactRegister = {
  name?:string,
  email?:string,
  phone_number?:string,
}

export type IcontactEdit = {
  id:string
  name?:string,
  email?:string,
  phone_number?:string,
}
