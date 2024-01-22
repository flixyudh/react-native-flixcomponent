import React from 'react';
import {ModalContext} from '../Provider/ModalProvider';

const useModal = () => {
  const ModalCTX = React.useContext(ModalContext);
  const {show, hide} = ModalCTX;
  if (!ModalCTX) {
    throw new Error('useModal must be defined.');
  }

  return {show, hide};
};

export default useModal;
