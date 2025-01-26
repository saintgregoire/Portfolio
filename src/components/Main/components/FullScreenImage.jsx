import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const FullScreenImage = ({ src, alt, swiperRef }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.tagName !== "IMG") {
      handleClose();
    }
  };

  return (
    <Box
      component="div"
      sx={{
        width: {
          xs: "340px",
          sm: "450px",
          md: "400px",
          lg: "368px",
        },
        height: { xs: "250px", sm: "320px", lg: "300px" },
        "@media (min-width: 1400px)": {
          width: "430px",
          height: "350px",
        },
        display: "flex",
        alignItems: "center",
        mx: "auto",
      }}
      {...(swiperRef
        ? {
            onMouseEnter: () => swiperRef.current?.autoplay.stop(),
            onMouseLeave: () => swiperRef.current?.autoplay.start(),
          }
        : {})}
    >
      <Box
        component="div"
        sx={{
          border: "1px solid lightgrey",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={src}
          alt={alt}
          onClick={() => handleClickOpen(src)}
          style={{
            cursor: "pointer",
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />

        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          PaperProps={{
            style: {
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(6px)",
            },
          }}
        >
          <DialogTitle>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </DialogTitle>
          <DialogContent
            onClick={handleBackdropClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img
              src={src}
              alt="full-screen"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default FullScreenImage;
