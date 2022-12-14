import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Tasklist = () => {
    const [allTask,setAllTask]=useState([]);

    useEffect(()=>{
        fetch(' http://demo2211087.mockable.io/allTask',{
            method:"GET"
        })
        .then(res => res.json())
        .then(data => setAllTask(data))
    })
    return (
        <div className="overflow-x-auto h-screen">
  <table className="table w-full">
    <thead>
      <tr>
        <th>SR</th>
        <th>Task</th>
        <th>Date</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {
            allTask.map((list,index)=> <tr key={list._id}>
                  <th>{index+1}</th>
                  <td>{list.task}</td>
                  <td>{list.date}</td>
                  <td><Link to={`/edit/${list._id}`}><button className='btn btn-secondary btn-sm'>Edit</button></Link></td>
            </tr>
            )
        }
    </tbody>
  </table>
</div>
    );
};

export default Tasklist;