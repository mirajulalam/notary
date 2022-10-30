import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditTask = () => {
    const {id}=useParams();
    const [taskList,setTaskList]=useState({});

    useEffect(()=>{
        const uri =`http://localhost:5000/allTask/${id}`
        fetch(uri)
        .then(res => res.json())
        .then(data => setTaskList(data))
    },[id]);


    const handleUpdate =event=>{
        event.preventDefault();
        const task=event.target.task.value;
        const date=event.target.date.value;

        const updateTask ={
            task,
            date
        }
        // send data  server
        const uri =`http://localhost:5000/task/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'successfully added');
                swal("Successfully", "Task update successfull", "success");
                event.target.reset();
            })
    }
    return (
        <div>
            <div className="hero-content text-center my-24">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-secondary text-2xl font-bold'>Update Task</h1>
        <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task</span>
          </label>
          <input type="text" name='task' placeholder="Task" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' placeholder="Date" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary text-white">Update</button>
        </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    );
};

export default EditTask;