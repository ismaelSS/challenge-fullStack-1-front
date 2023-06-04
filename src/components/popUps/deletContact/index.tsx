import { IdeleteContactPopUpProps } from "../../../interfaces/props"
import { api } from "../../../services/api"
import { ButtonDelete } from "../../buttons/buttonDelete"
import {GrFormClose} from 'react-icons/gr'


export const DeletContact = ({contactId, token, setPopUpSelector, popUpSelector}:IdeleteContactPopUpProps) => {
  const deleteContactFunction = async () => {
    const response = await api.delete(`contacts/${contactId}`, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    if(response.status == 204 ||response.status == 200){
      setPopUpSelector('none')
    }

  }

  return(
    <div className={`fixed ${popUpSelector === 'delete' ? 'block' : 'hidden'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-600 rounded-lg w-80 max-w-80 sm:w-full sm:max-w-sm mt-10 px-4 py-6 flex flex-col`}>
      <button onClick={() => setPopUpSelector('none')} className="self-end flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 hover:bg-indigo-500">
        <GrFormClose onClick={() => setPopUpSelector('none')} className="text-xl strocke-2" />
      </button>
      <h2 className="self-center text-lg font-semibold">Are you sure you want to delete this contact?</h2>
      <ButtonDelete text="Delete Contact" onClickFunction={() => deleteContactFunction()} />
    </div>
  )
}
