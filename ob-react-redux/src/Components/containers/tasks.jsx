import React, {useEffect,useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleteATask, completeATask } from '../../store/slices/tasks/sliceTasks';

const Tasks = () => {

    const dispatch = useDispatch();
    const {tasks:taskList} = useSelector(state=>state.tasks);
    const titleRef = useRef();
    const descRef = useRef();

    useEffect(() => {
        
    }, []);

    /*const tasks = [
        {id:0,title:"Tarea 1",desc:"Descripción"},
        {id:1,title:"Tarea 2",desc:"Descripción"},
        {id:2,title:"Tarea 3",desc:"Descripción"}];*/
    
    return (
        <div>
            {taskList.map((value,index)=>(
                <div key={index}>
                    <h1 style={value.complete?{textDecoration:"line-through",color:"green"}:{textDecoration:"none"}}> {value.title} </h1>
                    <p> {value.desc} </p>
                    <button onClick={()=>{
                        dispatch(deleteATask(value));
                    }}>X</button>
                    <button onClick={()=>{
                        dispatch(completeATask(index));
                    }}> {value.complete?"Mark as Undone":"Mark as Done"}</button>
                </div>
            ))}
            <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addNewTask({
                    title:titleRef.current.value,
                    desc:descRef.current.value,
                    complete:false
                }))
            }}>
                <label htmlFor="title">Title</label>
                <input ref={titleRef} id='title' name='title' type="text"/>
                <label htmlFor="desc">Description</label>
                <input ref={descRef} id='desc' name='desc' type="text"/>
                <button type='submit'>Agregar</button>
            </form>
        </div>
    );
}

export default Tasks;
