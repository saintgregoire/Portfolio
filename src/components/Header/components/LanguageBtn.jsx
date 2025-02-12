import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import frenchFlag from "../../../assets/img/icons/french.png";
import englishFlag from "../../../assets/img/icons/eng.png";
import LanguageIcon from "@mui/icons-material/Language";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageBtn = () => {
  const { i18n } = useTranslation();

  const actions = [
    {
      icon: frenchFlag,
      name: "Français",
      lang: "fr",
    },
    {
      icon: englishFlag,
      name: "English",
      lang: "en",
    },
  ];

  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(null);

  useEffect(() => {
    if(i18n.language === "fr"){
      setCurrentLang(frenchFlag);
    }else{
      setCurrentLang(englishFlag);
    }
  },[i18n.language]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectLang = (lang) => {
    handleClose();
    i18n.changeLanguage(lang);
  };

  return (
    <SpeedDial
      ariaLabel="Choose language"
      direction="down"
      sx={{
        position: "absolute",
        bottom: -164,
        right: { xs: 16, md: 30 },
        "& > button": {
          background: "rgba(226, 226, 226, 30%)",
          borderRadius: "0 0 8px 8px",
          height: "26px",
          "&:hover": {
            background: "rgba(226, 226, 226, 70%)",
          },
        },
      }}
      icon={
        open ? (
          <LanguageIcon sx={{ color: "grey" }} />
        ) : (
          <Box
            sx={{
              width: "26px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={currentLang}
              alt="English"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
        )
      }
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          sx={{
            "& > button": {
              background: "rgb(226, 226, 226)",
              "&:hover": {
                background: "lightgrey",
              },
            },
          }}
          key={action.name}
          icon={
            <Box
              sx={{
                width: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={action.icon}
                alt="English"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Box>
          }
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => selectLang(action.lang)}
        />
      ))}
    </SpeedDial>
  );
};

export default LanguageBtn;
