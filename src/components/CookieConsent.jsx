import { useState, useEffect } from "react";
import { Box, Button, Typography, Snackbar, Paper } from "@mui/material";

const COOKIE_CONSENT_KEY = "cookiesConsent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent || consent === "false") {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true"); 
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "false"); 
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        <Typography variant="body1">
          We use cookies to improve your experience. Accept?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Button variant="contained" color="primary" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDecline}>
            Decline
          </Button>
        </Box>
      </Paper>
    </Snackbar>
  );
};

export default CookieConsent;
