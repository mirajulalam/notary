import React, { useState } from 'react';
import swal from 'sweetalert';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AddTask = () => {
  const [date,setDate]=useState(new Date())

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
       <section className="max-w-7xl mx-auto px-12">
  <div className="flex justify-center items-center my-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="flex justify-center ">
         <DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
         />
    </div>
    <div className="flex justify-center">
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
</section>
         
    );
};

export default AddTask;