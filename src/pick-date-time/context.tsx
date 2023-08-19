import React, { ReactNode, createContext, useState } from "react";

interface IPickDateTimeContext {
  value: any;
  onChange: (value: any) => void;
  modalOpen: boolean;
  onChangeModalOpen: (value: boolean) => void;
}

const PickDateTimeContext = createContext<IPickDateTimeContext | undefined>(
  undefined
);

const PickDateTimeProvider = ({
  value,
  onChange,
  children,
}: {
  value: any;
  onChange: (value: any) => void;
  children: ReactNode;
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeModalOpen = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };

  const values = {
    value,
    onChange,
    modalOpen,
    onChangeModalOpen,
  };

  return (
    <PickDateTimeContext.Provider value={values}>
      {children}
    </PickDateTimeContext.Provider>
  );
};

const usePickDateTimeContext = () => {
  const context = React.useContext(PickDateTimeContext);
  if (context === undefined) {
    throw new Error(
      "usePickDateTimeContext must be used within a PickDateTimeContext"
    );
  }
  return context;
};

export { PickDateTimeProvider, usePickDateTimeContext };
