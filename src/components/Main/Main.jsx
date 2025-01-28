import Box from '@mui/material/Box';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Recommendations from './sections/Recommendations';

const Main = () => {
  return (
    <Box component="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Recommendations />
    </Box>
  )
}

export default Main