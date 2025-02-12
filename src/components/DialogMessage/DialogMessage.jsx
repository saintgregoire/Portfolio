import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { DialogContext } from "../../context/DialogContext";
import License from "./components/License";
import Terms from "./components/Terms";
import { useTranslation } from "react-i18next";

const DialogMessage = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {t} = useTranslation();

  const { openDialog, setOpenDialog, content } = useContext(DialogContext);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" sx={{pt: '3rem'}}>
        {content === "license"
          ? "MIT License"
          : content === "terms"
          ? t("Terms of Use & Privacy Policy")
          : null}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText
          sx={{
            "&  p": { color: "rgba(0, 0, 0, 0.6)", pb: ".5rem" },
          }}
        >
          {content === "license" ? (
            <License />
          ) : content === "terms" ? (
            <Terms />
          ) : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("close")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMessage;
