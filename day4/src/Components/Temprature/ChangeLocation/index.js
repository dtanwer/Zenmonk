import React from 'react'
import './index.css';
import { Button} from 'antd';
import PlaceIcon from '@mui/icons-material/Place';
import { Space } from 'antd';
function ChangeLocation({showModal}) {
  return (
    <div className='changeLoaction'>
         <Button  onClick={showModal} className='locationButton'> <Space className='ButtenText'><PlaceIcon className='locationIcon' /> Change Location</Space> </Button>
    </div>
  )
}

export default ChangeLocation