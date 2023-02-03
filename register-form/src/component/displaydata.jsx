import React, { useContext } from "react";
import { contextdata } from "./stepcontext ";

const Displaydata = () => {
  const { setdata, update, setupdate, final, setfinal } =
    useContext(contextdata);

  return (
    <>
      <h3>
        {final.map((cdata) => {
          return (
            <>
              <hr />
              <li> Name : {cdata.firstname}</li>
              <li> Surname : {cdata.lastname}</li>
              <li>Contact No. :{cdata.contact}</li>
              <li> E-mail : {cdata.email}</li>
              <li> Age : {cdata.age}</li>
              <li> Gender : {cdata.gender}</li>
              <li>City : {cdata.city}</li>
              <li> State : {cdata.state}</li>
              <li> Country : {cdata.country}</li>
              <hr />
            </>
          );
        })}
      </h3>
    </>
  );
};

export default Displaydata;
