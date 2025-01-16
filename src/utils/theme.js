import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 500,
      fontSize: '3rem',
      color: '#18181b',
      ['@media (max-width:600px)']: {
        fontSize: "1.9rem",
      }
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#18181b',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#18181b',
    },
    body1: {
      color: '#18181b',
    }
  },
  palette: {
    primary: {
      main: '#18181b',
    }
  }
})

export default theme;