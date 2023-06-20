import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './index.css'

export default function CircularIndeterminate() {
    const [isLoading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    return (
        <div className='loading' >
            {isLoading ? (<Box>
                <CircularProgress />
            </Box>) : <h1>No Data Found</h1>}

        </div>
    );
}