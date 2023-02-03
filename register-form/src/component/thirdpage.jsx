import React, { useContext } from 'react';
import { TextField , Button } from '@mui/material';
import { contextdata } from './stepcontext ';

const Thirdpage03 = () => {

    const {setdata,update ,setupdate , final , setfinal ,submitted} = useContext(contextdata)

    return (
        <>
            <div >

        <p >
            <TextField id="outlined-basic" label="City"value={update.city} onChange={(e)=>{setupdate({...update , "city" : e.target.value})}} variant="outlined" />
        </p>
        <p>
            <TextField id="outlined-basic" label="State"value={update.state} onChange={(e)=>{setupdate({...update , "state" : e.target.value})}} variant="outlined" />
        </p>
        <p>
            <TextField id="outlined-basic" label="Country"value={update.country} onChange={(e)=>{setupdate({...update , "country" : e.target.value})}} variant="outlined" />
        </p>
        <p>
            <Button variant="contained" className='m-auto d-flex' onClick={()=>{setdata(2)}} >Previous</Button>
        </p>
        <p>
            <Button variant="contained"className='m-auto d-flex' onClick={submitted} color="success">Submit</Button>
        </p>
            </div>
        </>
    );
};

export default Thirdpage03;