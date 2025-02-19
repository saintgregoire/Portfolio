import { useState, useEffect } from "react";
import { Box, Button, Typography, Snackbar, Paper } from "@mui/material";
import Cookies from "js-cookie";
import cookie from "../assets/img/cookie.webp";
import { useTranslation } from "react-i18next";
import { reloadI18n } from "../i18n/i18n";

const COOKIE_CONSENT_KEY = "cookiesConsent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    const consent = Cookies.get(COOKIE_CONSENT_KEY);
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_CONSENT_KEY, "true", { expires: 365 });
    reloadI18n();
    setOpen(false);
  };

  const handleDecline = () => {
    Cookies.set(COOKIE_CONSENT_KEY, "false", { expires: 365 });
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 400,
          position: 'relative',
        }}
      >
        <Typography variant="body1" sx={{pt: '1rem'}}>
          {t("We use cookies to improve your experience")}<br />{t("Accept")}&nbsp;?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Button variant="contained" color="success" onClick={handleAccept}>
            {t("Accept")}
          </Button>
          <Button variant="outlined" color="error" onClick={handleDecline}>
            {t("Decline")}
          </Button>
        </Box>
        <Box
          sx={{
            width: "100px",
            height: '100px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: 'absolute',
            top: "-60px",
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img
            src={cookie}
            alt="cookie"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Paper>
    </Snackbar>
  );
};

export default CookieConsent;
