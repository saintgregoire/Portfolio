import Box from '@mui/material/Box';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';

const Main = () => {
  return (
    <Box component="main">
      <Hero />
      <About />
      <Skills />
    </Box>
  )
}

export default Main