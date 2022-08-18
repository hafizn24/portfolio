import { Paper, Grid, Box, Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { 
    SiPython, 
    SiR, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiPhp, 
    SiMysql, 
    SiMongodb, 
    SiJava, 
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiGit,
    SiTensorflow,
    SiJupyter,
    SiRstudio
} from 'react-icons/si'
import { BsFileEarmarkExcel } from 'react-icons/bs'
import { Tooltip } from "@mui/material"
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesIcon from '@mui/icons-material/Devices';

function Skill() {
  return (
    <Box sx={{p:2}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Paper elevation={0} sx={{
                mx:2,
                my:1,
                px:5,
                pt:2,
                pb:5
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <TerminalIcon sx={{color:'white', fontSize: 45, mx:1}} />
                    <Typography variant="h5" color="secondary" sx={{textDecoration: 'underline'}}>
                        Programming Languages
                    </Typography>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{p:1}}>
                        <Tooltip title="Python">
                            <IconButton size="medium">
                                <SiPython />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="R">
                            <IconButton size="medium">
                                <SiR />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="HTML">
                            <IconButton size="medium">
                                <SiHtml5 />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="CSS">
                            <IconButton size="medium">
                                <SiCss3 />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="JavaScript">
                            <IconButton size="medium">
                                <SiJavascript />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{p:1}}>
                        <Tooltip title="PHP">
                            <IconButton size="medium">
                                <SiPhp />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="MySQL">
                            <IconButton size="medium">
                                <SiMysql />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="MongoDB">
                            <IconButton size="medium">
                                <SiMongodb />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Java">
                            <IconButton size="medium">
                                <SiJava />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="C++">
                            <IconButton size="medium">
                                <SiCplusplus />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Paper>
            <Paper elevation={0} sx={{
                mx:2,
                my:1,
                px:5,
                pt:2,
                pb:5
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <DevicesIcon sx={{color:'white', fontSize: 45, mx:1}} />
                    <Typography variant="h5" color="secondary" sx={{textDecoration: 'underline'}}>
                        Tools and Frameworks
                    </Typography>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{p:1}}>
                        <Tooltip title="React">
                            <IconButton size="medium">
                                <SiReact />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Nodejs">
                            <IconButton size="medium">
                                <SiNodedotjs />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Git">
                            <IconButton size="medium">
                                <SiGit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="TensorFlow">
                            <IconButton size="medium">
                                <SiTensorflow />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{p:1}}>
                        <Tooltip title="Jupyter">
                            <IconButton size="medium">
                                <SiJupyter />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="RStudio">
                            <IconButton size="medium">
                                <SiRstudio />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Excel">
                            <IconButton size="medium">
                                <BsFileEarmarkExcel />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
    </Box>
  )
}

export default Skill