import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function () {

    const [employees,setEmployees]=useState([])

    const {id}=useParams();

    useEffect(()=>{
        loadEmployees();

    },[]);

    const loadEmployees=async ()=>{
        const result=await axios.get("http://localhost:8080/employees")
        setEmployees(result.data);
    }
  
    //DeleteEmployee
    const deleteEmployee=async (id)=> {
        await axios.delete(`http://localhost:8080/employee/${id}`)
        loadEmployees();
    }



  return (
    <div className='container'>
         <div className='py-4'>
         <table class="table border shadow">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">CIN</th>
      <th scope="col">Diploma Year</th>
      <th scope="col">Join Year</th>
      <th scope="col">Leave Balance</th>
      <th scope="col">birthdate</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

    {
        employees.map((employee, index)=>(
            <tr>
            <th scope="row" key={index}>{index+1} </th>
            <td>{employee.username}</td>
            <td>{employee.name}</td>
             <td>{employee.cin}</td>
            <td>{employee.diplomaYear}</td>
            <td>{employee.joinYear}</td>
             <td>{employee.leaveBalance}</td>
             <td>{employee.birthdate}</td>
             <td>
             <button className='btn btn-primary mx-2'>View</button>
             <Link className='btn btn-outline-primary mx-2'
             
             to={`/editemployee/${employee.id}`}
             >Edit
             </Link>
             <button 
             
             className='btn btn-danger mx-2'
             onClick={()=> deleteEmployee(employee.id)}

             >Delete
             </button>

             </td>

          </tr>
        ))
    }

   

  </tbody>
</table>
</div>
    </div>
  )
}
