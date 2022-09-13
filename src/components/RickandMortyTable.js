import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Grid, Box }  from '@mui/material'

function RickandMortyTable({array}) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'species', headerName: 'Species', width: 125 },
    { field: 'status', headerName: 'Status', width: 100 },
  ]

  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
        <Box sx={{
            my:2,
            height: 370,
            width:{
                xs:'95%',
                sm:'60%',
                md:'42%',
                lg:'32%'
            }

        }}>
            <DataGrid
                rows={array}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Box>
    </Grid>
  )
}

export default RickandMortyTable    