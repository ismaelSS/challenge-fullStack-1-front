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
    <div className={`flex ${popUpSelector==="delete"?'fixed':'hidden'} flex-col border-blue-600 border-2 rounded-lg bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm max-w-80 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <button onClick={() => setPopUpSelector('none')} className="rounded-bl-lg bg-indigo-600 hover:bg-indigo-500 h-7 w-7 self-end flex items-center justify-center">
            <GrFormClose onClick={() => setPopUpSelector('none')} className="strocke-2 text-xl"/>
          </button>
          <h2 className="text-lg font-semibold self-center">Are you sure you want to delete this contact?</h2>

          <ButtonDelete text="Delete Contact" onClickFunction={() => deleteContactFunction()}/>
        </div>
  )
}
