import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RickandMorty from './components/RickandMorty'
import Main from './components/Main'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/rickandmorty' element={<RickandMorty />} />
        </Routes>
      </BrowserRouter>
		</ThemeProvider>
  )
}

export default App