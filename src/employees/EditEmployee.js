
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditEmployee() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [employee, setEmployee]=useState({
        surname:'',
        name:'',
        cin:'',
        birthDate:'',
        diplomaYear:'',
        joinYear:'',
        leaveBalance:''
    })

    const {surname, name, cin, birthDate, diplomaYear, joinYear, leaveBalance}=employee

    const onInputChange=(e)=>{

        setEmployee({...employee, [e.target.name]:e.target.value});
 
    };


    useEffect(()=>{
        loadEmployee();
    },[]);

    //Post data into database
   const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`, employee);
    navigate("/");

   };

   const loadEmployee =async ()=>{
        const result=await axios.get(`http://localhost:8080/employee/${id}`)
        setEmployee (result.data)
   }


    return <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">EDIT EMPLOYEE</h2>

            
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>

            <label htmlFor='Surname' className='form-bel'>
              Surname
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter surname'
            name='surname'
            value={surname}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Name' className='form-bel'>
              Name
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter name'
            name='name'
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='CIN' className='form-bel'>
              CIN
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter cin'
            name='cin'
            value={cin}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='BirthDate' className='form-bel'>
            BirthDate
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter birthDate'
            name='birthDate'
            value={birthDate}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='DiplomaYear' className='form-bel'>
            DiplomaYear
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter diplomaYear'
            name='diplomaYear'
            value={diplomaYear}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='JoinYear' className='form-bel'>
            JoinYear
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter joinYear'
            name='joinYear'
            value={joinYear}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='LeaveBalance' className='form-bel'>
            LeaveBalance
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter leaveBalance'
            name='leaveBalance'
            value={leaveBalance}
            onChange={(e)=>onInputChange(e)}
            /> 
          </div>
          <button type='submit' className='btn btn-outline-primary mx-2'>Submit</button>
          <Link  className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
          </form>
        </div>
      
    </div>

</div>;
}




