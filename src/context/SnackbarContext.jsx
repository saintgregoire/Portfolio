import { createContext, useState } from "react";

export const SnackbarContext = createContext();
SnackbarContext.displayName = "SnackbarContext";

const SnackbarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const snackbarValue = {
    open: open,
    setOpen: setOpen,
    result: result,
    setResult: setResult,
  };

  return (
    <SnackbarContext.Provider value={snackbarValue}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
