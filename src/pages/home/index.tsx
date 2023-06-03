import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactCard } from "../../components/contactCard";
import { Icontact } from "../../interfaces/props";
import { useNavigate } from "react-router-dom";
import { ContactsHeader } from "../../components/ContactsHeader";
import { IpopUpSelector } from "../../interfaces/vars";
import { AddContact } from "../../components/popUps/addContact";


export const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@ismaelSS-contacts:token");
  const [contacts, setContacts] = useState<Icontact[]>([]);
  const [loading, setLoading] = useState(true)
  const [popUpSelector, setPopUpSelector] = useState<IpopUpSelector>('none')
  const [contastFocus, setContactFocus] = useState<Icontact | null>(null)

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await api.get("contacts/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response)

        setContacts(response.data);
      } catch (error) {

        localStorage.clear()
        navigate('/login')

        console.error(error);
      }finally{
        setLoading(false)
      }
    }

    fetchContacts();
    console.log(contacts)
  }, []);

  if(loading){
    return(
      <h1 className="text-xl wid font-bold">carregando</h1>
    )
  }

  if(!contacts){
    return(
      <>
        <h3 className="text-xl wid font-bold">sem livros irmão</h3>
      </>
    )
  }

  return (

    <body className="bg-blue-100">
      <AddContact token={token} setPopUpSelector={setPopUpSelector} popUpSelector={popUpSelector}/>
      <ContactsHeader setPopUpSelector={setPopUpSelector}/>
      <ul className="container mx-auto mt-8 max-w-4xl flex flex-wrap justify-center gap-x-1">
        {contacts.map((contact: Icontact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone_number={contact.phone_number}
            created_at={contact.created_at}
          />
        ))}
    </ul>
    </body>

  );
};
