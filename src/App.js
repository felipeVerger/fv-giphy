import React from 'react'
import Navbar from './components/Navbar'
import Gifs from './components/Gifs/Gifs'
import { Box } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{backgroundColor: 'var(--color-secondary)', height: '100%', width: '100%'}}>
          <Navbar/>
          <Gifs/>
      </Box>
    </QueryClientProvider>
  )
}

export default App