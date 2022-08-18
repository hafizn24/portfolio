import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Appbar from './components/Appbar'
import Hero from './components/Hero';
import Skill from './components/Skill';
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
      default: '#212121',
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
      <Skill />
		</ThemeProvider>
  )
}

export default App