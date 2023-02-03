import React, { useContext } from 'react';
import { TextField , Button } from '@mui/material';
import { contextdata } from './stepcontext ';

const Firstpage01 = () => {
    
    const {setdata ,update ,setupdate} = useContext(contextdata)

    return (
        <>
         <div >

        <p >
            <TextField id="outlined-basic" value={update.firstname} onChange={(e)=>{setupdate({...update , "firstname" : e.target.value})}} label="First Name" variant="outlined" />
        </p>
        <p>
            <TextField id="outlined-basic"value={update.lastname} onChange={(e)=>{setupdate({...update , "lastname" : e.target.value})}} label="Last Name" variant="outlined" />
        </p>
        <p>
            <TextField id="outlined-basic"value={update.contact} onChange={(e)=>{setupdate({...update , "contact" : e.target.value})}} label="Contact Number" variant="outlined" />
        </p>
        <p>
            <Button variant="contained" className='m-auto d-flex' onClick={()=>{setdata(2)}} >Next</Button>
        </p>
            </div>
        </>
    );
};

export default Firstpage01;