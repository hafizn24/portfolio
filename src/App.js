import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Divider } from "@mui/material"

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Appbar/>
      <Hero />
      <Divider variant="middle" />
      <Skill />
      <Edu />
      <Cert />
      <Divider variant="middle" />
      <Project />
      <Footer />
		</ThemeProvider>
  )
}

export default App