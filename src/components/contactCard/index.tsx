import { Icontact } from "../../interfaces/props"


export const ContactCard = ({name, id, phone_number, email, created_at}:Icontact) => {
  const handleListItemClick = (key:string) => {
    // Use a chave (key) capturada para realizar ações necessárias
    console.log('Chave do item clicado:', key);
  };

  return (
    <li key={id} className="bg-white shadow-md rounded p-4 mb-4 w-80" onClick={() => handleListItemClick(id)}>
      <h3 className="text-xl font-bold mb-2 truncate">{name}</h3>
      <p className="text-gray-600 mb-2 truncate">{email}</p>
      <p className="text-gray-600 mb-2 truncate">{phone_number}</p>
      <p className="text-sm text-gray-500 truncate">desde de: {created_at}</p>
    </li>
  )
}
