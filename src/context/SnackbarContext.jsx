import { createContext, useState } from "react";

export const SnackbarContext = createContext();
SnackbarContext.displayName = "SnackbarContext";

const SnackbarContextProvider = ({ children }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const [result, setResult] = useState("");

  const snackbarValue = {
    openSnack: openSnack,
    setOpenSnack: setOpenSnack,
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
