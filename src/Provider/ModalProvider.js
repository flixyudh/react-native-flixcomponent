import React from 'react';
import InternalUseModal from '../Hook/internalUseModal';
import Modal from '../Modal/Modal';

const ModalContext = React.createContext({
  /**
   * @typedef {object} ModalData
   * @prop {React.JSX} renderItem - Content of Modal
   * @prop {boolean} [disabledBackdrop] - If false, disable close modal when pressing backdrop .
   * @prop {void} onPressBackdrop - function to handle when backdrop pressed, not trigger if `disabledBackdrop` set to `true`
   * @prop {number} duration - duration of show/hide animation (if `animationType` is declared and not `none`)
   * @prop {('none'|'fade'|'slide')} animationType - type of animation
   * @prop {import('react-native').ViewProps} styleContainer - custom style for container view of Modal
   */
  ModalData: null,
  /**
   * function to show modal
   *
   * @param {ModalData} ModalData
   */
  show: ModalData => null,
  /**
   * function to hide modal
   */
  hide: () => null,
});

const ModalProvider = ({children}) => {
  const {ModalData, show, hide} = InternalUseModal();
  const contextValue = React.useMemo(
    () => ({ModalData, show, hide}),
    [ModalData, show, hide],
  );

  const RenderModalItem = () => {
    if (ModalData) return <Modal {...ModalData} />;
    else return null;
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <RenderModalItem />
    </ModalContext.Provider>
  );
};

export {ModalContext, ModalProvider};
