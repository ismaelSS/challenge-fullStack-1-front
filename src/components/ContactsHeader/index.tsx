import {BsPersonFillAdd, BsPersonFillDash, BsPersonFillGear} from 'react-icons/bs'
import {BiExit} from 'react-icons/bi'
import { IpopUpSelector } from '../../interfaces/vars'


export const ContactsHeader =({setPopUpSelector}:{setPopUpSelector:React.Dispatch<React.SetStateAction<IpopUpSelector>>}) =>{
  return(
  <div className='w-screen bg-cyan-600 flex justify-around align items-center h-8 fixed top-0 min-w-fit'>
        <div className='w-4/5 h-full flex flex-row justify-between align items-center min-w-fit flex-grow-0'>
        <BiExit className='h-6 w-6 w-24 min-w-fit'/>
        <h2 className='text-lg font-semibold min-w-fit'>Meus contatos</h2>
        <div className='flex gap-3 min-w-fit'>
          <BsPersonFillGear className='h-6 w-6 min-w-fit hover:cursor-pointer' onClick={() => setPopUpSelector('edit')}/>
          <BsPersonFillDash className='h-6 w-6 min-w-fit hover:cursor-pointer' onClick={() => setPopUpSelector('delete')}/>
          <BsPersonFillAdd className='h-6 w-6 min-w-fit hover:cursor-pointer' onClick={() => setPopUpSelector('add')}/>
        </div>
      </div>
    </div>
  )
}
