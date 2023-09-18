import { useState,useEffect} from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Pending from './Components/Pending';
import Completed from './Components/Completed';


function App() {

  let pending = JSON.parse(localStorage.getItem('pending'));
  let completed = JSON.parse(localStorage.getItem('completed'));
  if(completed===null){
    completed = [];
  }
  if(pending===null){
    pending = [];
  }
  const [tasks,setTasks] = useState(pending); 
  const [completedTasks,setCompletedTasks] = useState(completed);
  const [inList,setInList] = useState(false);
  const [isEmpty,setIsEmpty] = useState(false);
  const [pendingVariant,setPendingVariant] = useState('contained');
  const [completedVariant,setCompletedVariant] = useState('outlined');
  const [toggle,setToggle] = useState(true);
  const [formData,setFormData] = useState({
    'task':"",    
});

const showPending = ()=>{
  setPendingVariant('contained');
  setCompletedVariant('outlined');
  setToggle(true);

}

const showCompleted = ()=>{
  setCompletedVariant('contained');
  setPendingVariant('outlined');
  setToggle(false);
}

const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevData=>{
        return {
            ...prevData,
            [name]:value,
        }
    });
}

const addTask = (event)=>{
  event.preventDefault();

  if(formData.task===''){
    setIsEmpty(true);
    setTimeout(()=>{
      setIsEmpty(false);
    },3000);
    return ;
  }

  for(let i=0;i<tasks.length;i++){
    if(formData.task===tasks[i]){
      setInList(true);
      setTimeout(()=>{
        setInList(false);
      },3000);
      return ;
    }
  }
  setInList(false);
  setTasks(prevTasks=>[...prevTasks,formData.task]);
  setFormData(prevFormData=>{
    return {
      ...prevFormData,
      'task':'',
    }
  })
}

  const deleteTask = (index)=>{
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const completeTask = (index)=>{
    setCompletedTasks(prevCompletedTasks=>[...prevCompletedTasks,tasks[index]]);
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const clearCompleted = ()=>{
    setCompletedTasks([]);
  }
  const clearPending = ()=>{
    setTasks([]);
  }


  console.log(completedTasks);

  useEffect(()=>{
    localStorage.setItem('pending',JSON.stringify(tasks));
    localStorage.setItem('completed',JSON.stringify(completedTasks));
  },[tasks,completedTasks]);

  return (
    <>
    <Navbar/>
    <Body pendingVariant={pendingVariant} completedVariant={completedVariant} showPending={showPending} showCompleted={showCompleted}/>
    {toggle && <Pending 
    formData={formData} 
    handleChange={handleChange} 
    addTask={addTask} 
    tasks={tasks} 
    inList={inList}
     isEmpty={isEmpty} 
    deleteTask={deleteTask} 
    completeTask={completeTask} 
    clearPending={clearPending}
    />}
    {toggle===false && <Completed 
    completedTasks={completedTasks} 
    clearCompleted={clearCompleted}
    />}
    </>
  );
}

export default App;
