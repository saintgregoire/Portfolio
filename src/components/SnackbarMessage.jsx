import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarContext";

const SnackbarMessage = () => {
  const { openSnack, setOpenSnack, result } = useContext(SnackbarContext);

  const handleClose = () => {
    setOpenSnack(false);
  };

  return (
    <Snackbar
      open={openSnack}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Alert
        onClose={handleClose}
        severity={result}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {result === "success"
          ? "Your form has been successfully submitted!"
          : "There was an error submitting the form. Please try again."}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
