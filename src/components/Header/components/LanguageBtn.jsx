import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import frenchFlag from "../../../assets/img/icons/french.png";
import englishFlag from "../../../assets/img/icons/eng.png";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";

const LanguageBtn = () => {
  const actions = [
    {
      icon: frenchFlag,
      name: "Français",
    },
    {
      icon: englishFlag,
      name: "English",
    },
  ];

  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(englishFlag);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectLang = (lang) => {
    setCurrentLang(lang), handleClose();
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
          onClick={() => selectLang(action.icon)}
        />
      ))}
    </SpeedDial>
  );
};

export default LanguageBtn;
