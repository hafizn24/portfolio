import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Appbar({exe_about, exe_exp, exe_project}) {
  return (
    <Box sx={{ flexGrow: 1, pb:6}}>
      <AppBar sx={{backgroundColor:'#141414'}} elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }} color="primary">
            Hafiz.
          </Typography>
          <Button sx={{fontWeight: 'bold'}} onClick={exe_about}>About</Button>
          <Button sx={{fontWeight: 'bold'}} onClick={exe_exp}>Experience</Button>
          <Button sx={{fontWeight: 'bold'}} onClick={exe_project}>Projects</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar