import React, { useEffect } from 'react'
import { useState } from 'react';
import './Basicform.css'

function Basicform() {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');
  const [formData, setformData] = useState(null);

  const handleData = () => {
    setformData('');
  }
  const handleReset = () => {
    setname('');
    setemail('');
    setmessage('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message){
      alert('Please fill all fields');
      }
    else{
    if(!email.includes('@') && !email.includes('.')){
        alert('Please provide a valid email address......')
    }
    else{
    alert('Form Submitted Successfully')
    setformData({name,email,message});
    setname('');
    setemail('');
    setmessage('');
    }
  }
  }
  return (
    <div className='main-contain'>
      <form>
      <p>Name :- Ronak Malam</p>
      <p>UID :- 24BTCSE025</p>
        <span>
          <label>Name: 
            <input type="text" value={name} placeholder="Enter Your Name..." onChange={(e)=>setname(e.target.value)} />
          </label>
        </span>
        <p></p>
        <span>
          <label>Email: 
            <input type="email" value={email} placeholder="Enter Your Email....." onChange={(e)=>setemail(e.target.value)} />
          </label>
        </span>
        <p></p>
        <span>
          <label>Message: 
            <input type="text" value={message} placeholder="Message..." required onChange={(e)=>setmessage(e.target.value)}/>
          </label>
        </span>
        <p></p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleData}>Reset-Data</button>
      </form>
      <div>
      <h3>Details Submitted :</h3>
      <p> Name: {formData ? formData.name : ''}</p>
      <p> Email: {formData ? formData.email : ''}</p>
      <p> Message: {formData ? formData.message : ''}</p>
      </div>
    </div>
  )
}

export default Basicform