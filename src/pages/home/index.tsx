import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Icontact {
  id:string
  name: string
  email: string
  phone_number: string
  created_at: string
}

export const Home = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aXppbmhvQGVtaWFsLmNvbSIsImlhdCI6MTY4NTU2ODIzOCwiZXhwIjoxNjg1NTcxODM4LCJzdWIiOiI5MzNmM2IxNC01MmEyLTQxMTAtYWQyMC00MmYwNDA0OWM5NjAifQ.JbAoa6N9mizX5l1cranFT8qF8CXkDQ4nEcpCwW_0kkM";
  const [contacts, setContacts] = useState<Icontact[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await api.get("contacts/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setContacts(response.data);
        console.log(response.data)
      } catch (error) {
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
        <h1 className="text-xl wid font-bold">{contacts.length}</h1>
        <h3 className="text-xl wid font-bold">sem livros irmão</h3>
      </>
    )
  }

  return (
    <div>
      {contacts.map((contact: Icontact) => (
        <p key={contact.id}>{contact.name}</p>
      ))}
      <h1 className="text-xl wid font-bold">{contacts.length}</h1>
      <h2>carregou</h2>
    </div>
  );
};
