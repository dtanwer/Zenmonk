
import MyForm from '../../components/form';
import TodoList from "../../components/todoList";
import './index.css'

const Home = () => {



  return (
    <div className='home'>
      <div className='heading'>
        <h1>Assign Task To Users</h1>
      </div>
      <div>
        <MyForm/>
      </div>
      <TodoList />
    </div>
  )
}

export default Home