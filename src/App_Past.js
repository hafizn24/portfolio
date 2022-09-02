import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Divider } from "@mui/material"
import { useRef } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, Button } from "@mui/material"

import RickandMorty from './components/RickandMorty'
import Appbar from './components/Appbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Edu from './components/Edu'
import Cert from './components/Cert'
import Project from './components/Project'
import Footer from './components/Footer'
import './App.css';

const font = "'Lato', sans-serif"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8F329D', //#7e57c2
    },
    secondary: {
      main: '#7e57c2', //6383ea
    },
    background: {
      default: '#141414', // 212121
      paper: '#1E1E1E', //303030
    },
  },
  typography: {
    fontFamily: font,
  },
});

function App() {
  const about_id = useRef(null)
  const exp_id = useRef(null)
  const project_id = useRef(null)
  
  const exe_about = () => about_id.current.scrollIntoView({behavior: "smooth"})
  const exe_exp = () => exp_id.current.scrollIntoView({behavior: "smooth"})
  const exe_project = () => project_id.current.scrollIntoView({behavior: "smooth"})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <BrowserRouter>
        <Routes>
          <Route path='/rickandmorty' element={<RickandMorty />} />
        </Routes>
      </BrowserRouter>

      <div ref={about_id}/>
      <Appbar exe_about={exe_about} exe_exp={exe_exp} exe_project={exe_project}/>
      <Hero />

      <Link href='/rickandmorty' underline="none" sx={{mx:1}}>
        <Button>Enter</Button>
      </Link>

      <div ref={exp_id}/>
      <Divider variant="middle" />
      <Skill />
      <Edu />
      <Cert />
      <Divider variant="middle" />
      <div ref={project_id}/>
      <Project />
      <Footer />
		</ThemeProvider>
  )
}

export default App