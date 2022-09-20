import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchGifs } from '../../service/service';
import Loading from '../Loading/Loading';

import './GifsStyle.css';

const Gifs = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, error } = useQuery(['fetchGifs', offset], () => fetchGifs('trending', offset), {
    keepPreviousData: true,
  })

  const handlePage = (arg) => {
    if (arg === 'prev') {
      setOffset(offset - 20)
    } else if (arg === 'next') {
      setOffset(offset + 20)
    }
  }
  console.log(data);

  if (isLoading) {
    <Loading/>
  }

  return (
    <Stack justifyContent='center' alignItems='center' paddingBottom='50px'>
      <Stack direction='row' justifyContent='center' alignItems='center' gap='1rem' flexWrap='wrap' p='4rem' width='100%'>
        {data?.map((item) => (
          <Box key={item.id} sx={{width: '250px', height: '250px' ,backgroundColor: 'white'}}>
            <img src={item.images.fixed_height.url} alt="gif" className='img-gif'/>
          </Box>
        ))}
      </Stack>
      <Stack direction='row' gap={1}>
        <button className='btn btn-left' onClick={() => handlePage('prev')}>Prev</button>
        <button className='btn btn-right' onClick={() => handlePage('next')}>Next</button>
      </Stack>
    </Stack>
  )
}

export default Gifs