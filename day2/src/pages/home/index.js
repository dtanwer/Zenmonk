import { Outlet} from 'react-router-dom'
import Form from '../../components/form';
import Buttons from '../../components/buttons';
import Heading from '../../components/heading';


const Index=({inputData,setInputData,deleteData,completeData})=>{
  return (
    <div className='Home'>
      <Heading/>
      <Form setInputData={setInputData}  inputData={inputData}/>
      <Buttons inputData={inputData} completeData={completeData} deleteData={deleteData}/>
      <Outlet />
    </div>

  )
}

export default Index