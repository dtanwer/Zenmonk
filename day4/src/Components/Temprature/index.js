import {useState,useRef} from 'react'
import './index.css'
import Content from './Content'
import IconWithContent from './IconWithDetails'
import ChangeLocation from './ChangeLocation'
import { Modal,Input } from 'antd';
const { Search } = Input;

function Temprature({data,setCityInput}) {
  const refOfInput=useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value) =>{
    setIsModalOpen(false);
    setCityInput(value);
    refOfInput.current.value="";
  };
  return (
    <div className='temprature'>
      <Content data={data}/> 
      <IconWithContent data={data}/>
      <ChangeLocation  showModal={showModal} />
      <Modal title="Search For City" width={1000} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Search placeholder="Enter City"  ref={refOfInput} allowClear onSearch={onSearch} style={{ width: 900}} />
      </Modal>
    </div>
  )
}

export default Temprature