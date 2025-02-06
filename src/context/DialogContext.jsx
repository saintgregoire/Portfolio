import { createContext, useState } from "react";

export const DialogContext = createContext();
DialogContext.displayName = "DialogContext";

const DialogContextProvider = ({children}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [content, setContent] = useState("");

  const dialogValue = {
    openDialog: openDialog,
    setOpenDialog: setOpenDialog,
    content: content,
    setContent: setContent
  }

  return(
    <DialogContext.Provider value={dialogValue}>
      {children}
    </DialogContext.Provider>
  )

}

export default DialogContextProvider;