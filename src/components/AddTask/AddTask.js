import React from 'react';
import swal from 'sweetalert';

const AddTask = () => {

    const handleSubmit =event=>{
        event.preventDefault();
        const task=event.target.task.value;
        const date=event.target.date.value;
        console.log(date);
        const addTask ={
            task,
            date
        }
        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'successfully added');
                swal("Successfully", "Task added successfull", "success");
                event.target.reset();
            })
    }

    return (
          <div className="hero min-h-screen bg-base-200">
   <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="card-body">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-secondary text-2xl font-bold'>Task Name</h1>
        <form onSubmit={handleSubmit}>
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
          <button type='submit' className="btn btn-secondary text-white">Submit</button>
        </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  </div>
    );
};

export default AddTask;