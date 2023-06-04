import { BsPersonFillAdd, BsPersonFillDash, BsPersonFillGear } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { useState } from 'react';

import { IcontactHeaderProps } from '../../interfaces/props';

export const ContactsHeader = ({ setPopUpSelector, navigate, setContactFocus, popUpSelector }: IcontactHeaderProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

  const normalizeParameters = (setPopPupType: 'edit' | 'delete') => {
    setPopUpSelector(setPopPupType);
    setContactFocus(null);
  };

  const exitFunction = () => {
    localStorage.removeItem("@ismaelSS-contacts:token");
    navigate('/login');
  };

  const handleTagClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMessagePosition({ x, y });
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1700);
  };

  return (
    <div className="w-screen bg-cyan-600 flex justify-around items-center h-8 fixed top-0 min-w-fit">
      <div className="w-4/5 h-full flex flex-row justify-between items-center min-w-fit flex-grow-0">
        <BiExit className="h-6 w-6 w-24 min-w-fit hover:cursor-pointer" onClick={() => exitFunction()} />
        <h2 className="text-lg font-semibold min-w-fit">Meus contatos</h2>
        <div className="flex gap-3 min-w-fit">
          <BsPersonFillGear
            className={`h-6 w-6 min-w-fit hover:cursor-pointer ${popUpSelector === 'edit' ? 'text-blue-800' : ''}`}
            onClick={(event) => {
              handleTagClick(event);
              normalizeParameters('edit');
            }}
          />
          <BsPersonFillDash
            className={`h-6 w-6 min-w-fit hover:cursor-pointer ${popUpSelector === 'delete' ? 'text-blue-800' : ''}`}
            onClick={(event) => {
              handleTagClick(event);
              normalizeParameters('delete');
            }}
          />
          <BsPersonFillAdd
            className={`h-6 w-6 min-w-fit hover:cursor-pointer ${popUpSelector === 'add' ? 'text-blue-800' : ''}`}
            onClick={() => setPopUpSelector('add')}
          />
        </div>
      </div>
      {showMessage && (
        <div className="absolute bg-gray-800 text-white p-2 rounded-md flex-nowrap text-sm" style={{ left: messagePosition.x, top: messagePosition.y }}>
          Select a contact
        </div>
      )}
    </div>
  );
};
