
import React, { useContext } from "react"
import Firstpage01 from "./component/firstpage";
import Secondpage02 from "./component/secondpage";
import Thirdpage03 from "./component/thirdpage";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Step, StepLabel, Stepper } from "@mui/material";
import { contextdata } from "./component/stepcontext ";
// import './App.css';
import Displaydata from "./component/displaydata";

function App() {
  const {data , setdata} = useContext(contextdata)


  const showstep = (step) => {
   
      switch (step) {
        case 1:
          return <Firstpage01/>
        case 2:
          return <Secondpage02/>
        case 3:
          return <Thirdpage03/>  
          default:
            break;
          }
  }

  

  return (
    <>
      <div className="container m-5 p-5 border border-4 min-vh-100 ">

        <div className="w-25 m-auto p-4 d-flex justify-content-center ">

          <Stepper style={{width : "90px"}} activeStep={data-1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          <Stepper  style={{width : "90px"}} activeStep={data-1}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          <Stepper>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        <div className="d-flex justify-content-center " >
          {/* <Firstpage01 />
          <Secondpage02 />
          <Thirdpage03 /> */}
          {showstep(data)}
        </div>
          <Displaydata/>
      </div>
    </>
  );
}

export default App;
