
import { useLocation } from 'react-router-dom'
import './index.css'

const List = ({ mode, inputData, setCompleteData, setDeleteData }) => {
    const handelDelete = (e, item,i) => {
        inputData[i].isDelete=true;
        setDeleteData(old => [...old, item]);
    }
    const handelCheckBox = (e, item) => {
        setCompleteData(old => [...old, item]);
    }
    const { state } = useLocation();
    const mainData = mode === 0 ? inputData : state;

    const listHading= mode===0?"Todo List":mode===-1?"Deleted List":"Completed List";
    console.log(mode)

    return (

       mainData.length===0?(""):(
        <div className='list'>
        <h1>{listHading}</h1>
        <div>
            <table>
                <tr>
                    <th className='task'>Task</th>
                    <th className='date'>Date</th>
                    {mode === 0 ? <th className='checkBox'>CheckBox</th> : <th className='checkBox'>Status</th>}
                    {mode === 0 ? <th className='listBtn'>Delete</th> : ("")}
                </tr>
                {
                    mainData?.map((item,i) => {

                            return (
                                <tr>
                                    <td className='task'><p>{item.text}</p></td>
                                    <td className='date'>{item.date}</td>
                                    {mode === 0 ? <td className='checkBox'><input type="checkBox" onClick={(e) => { handelCheckBox(e, item) }} /></td> :
                                        mode === 1 ? <td className='status'>Completed</td> : <td className='status'>Deleted</td>}
                                    {mode === 0 ? <td className='listBtn'><button onClick={(e) => handelDelete(e, item,i)} >Delete</button></td> : ""}
    
                                </tr>
                            )
                        
                    })
                }
            </table>

        </div>
    </div>
       )
    )
}

export default List