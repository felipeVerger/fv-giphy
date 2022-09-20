import { Box, Stack } from "@mui/material"

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Box p='2rem' backgroundColor='var(--color-primary)'>
      <Stack direction="row" justifyContent='space-between'>
        <img src={Logo} alt="logo" style={{width: '250px'}}/>
        <Box display='flex' justifyContent='center' alignItems='center' width='30%'>
          <input 
            style={{
              width: '100%',
              height: '50px',
              outline: 'none',
              textIndent: '10px',
              fontSize: '14px',
              color: 'var(--color-primary)',
              borderRadius: '10px 0 0 10px'
            }}
          />
          <button
            style={{
              width: '100px',
              height: '50px',
              backgroundColor: 'var(--color-tertiary)',
              border: 'none',
              borderRadius: '0 10px 10px 0',
              color: 'white'
            }}
          >Search</button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Navbar