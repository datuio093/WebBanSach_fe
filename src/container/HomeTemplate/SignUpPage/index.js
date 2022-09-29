
import React, { useState } from 'react'
import InputStatus from './compoents/inputStatus';

export default function LoginPage() {
    const [status, setStatus] = useState('');
    const handleStatusChange = (e) => {

        setStatus(e.target.value);
      }
    
      const sendStatusDataToParent = (data) => {
        setStatus(data);

        console.log(data)
    
      }
    return(
        <InputStatus onChange={handleStatusChange} valueData={status} sendStatusToParent={sendStatusDataToParent} />
    );
}