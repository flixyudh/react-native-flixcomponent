import React from 'react';

const InternalUseModal = () => {
  const [ModalData, setModalData] = React.useState(null);

  const show = React.useCallback(data => {
    const id = Date.now().toString(36);
    requestAnimationFrame(() => {
      setModalData({...data, id, hide});
    });
  }, []);

  const hide = React.useCallback(() => {
    setModalData(null);
  }, []);

  return {
    ModalData,
    show,
    hide,
  };
};

export default InternalUseModal;
