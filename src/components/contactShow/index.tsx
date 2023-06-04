import {IcontactCardProps } from "../../interfaces/props"


export const ContactShow = ({name, id, phone_number, email, created_at}:IcontactCardProps) => {


  return (
    <div
      className="bg-white shadow-md rounded p-4 mb-4 w-80"
    >
      <h3 className="text-xl font-bold mb-2 truncate">{name}</h3>
      <p className="text-gray-600 mb-2 truncate">{email}</p>
      <p className="text-gray-600 mb-2 truncate">{phone_number}</p>
      <p className="text-sm text-gray-500 truncate">desde de: {created_at}</p>
    </div>
  )
}
