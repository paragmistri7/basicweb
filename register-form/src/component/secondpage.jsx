import React, { useContext } from 'react';
import { TextField , Button } from '@mui/material';
import { contextdata } from './stepcontext ';

const Secondpage02 = () => {

    const {setdata,update ,setupdate} = useContext(contextdata)


    return (
        <>
        <div >

    <p >
        <TextField id="outlined-basic" label="E-mail"value={update.email} onChange={(e)=>{setupdate({...update , "email" : e.target.value})}} variant="outlined" />
    </p>
    <p>
        <TextField id="outlined-basic" label="Gender"value={update.gender} onChange={(e)=>{setupdate({...update , "gender" : e.target.value})}} variant="outlined" />
    </p>
    <p>
        <TextField id="outlined-basic" label="Age"value={update.age} onChange={(e)=>{setupdate({...update , "age" : e.target.value})}} variant="outlined" />
    </p>
    <p className='d-flex justify-content-around '>
        <Button variant="contained"   onClick={()=>{setdata(1)}} >Previous</Button>
        <Button variant="contained"   onClick={()=>{setdata(3)}}>Next</Button>
    </p>
    
    
        </div>
    </>
    );
};

export default Secondpage02;