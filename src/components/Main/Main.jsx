import Box from '@mui/material/Box';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Education from './sections/Education/Education';
import Recommendations from './sections/Recommendations/Recommendations';
import Contact from './sections/Contact/Contact';

const Main = () => {
  return (
    <Box component="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Recommendations />
      <Contact />
    </Box>
  )
}

export default Main