import { Link } from "react-router-dom";

import { useState } from "react"

function Loginpage(){

    const [Password1 , setPassword1] = useState("");
    const [Password2 , setPassword2] = useState("");
    const [same, setSame]=useState(true);

    
    function handlpass (event){
        setPassword1(event.target.value);
    }

    function handlpass1 (event){
        setPassword2(event.target.value);

        if(Password1 === event.target.value){
            console.log("same");
            setSame(true);
        }
        else{
            console.log("not same");
            setSame(false);
        }
    }
    
    return(

        <>
        <div className="loginformdiv">

            <img
                src="./assets/Amazontxt.png"
                alt="amazon"
                className="amazon-logoo"
            ></img>

            <h1 style={{marginTop:"5px"}}>Create account</h1>

         <form className="my-5" style={{width:"25%",margin:"auto"}} >
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input  className="form-control"/>
    <br/>
    <label  className="form-label">UserName</label>
    <input  className="form-control"/>
    <br/>
    <label  className="form-label">Password</label>
    <input  value={Password1} onChange={handlpass} type="password"  className="form-control"/>
    <br/>
    <label  className="form-label">Re-enter Password</label>
    <input value={Password2} onChange={handlpass1} type="password" className="form-control"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label" >i agree</label>
  </div>
        
        {!same && <p>Paswords don't Match </p>}
  <button className="Createbtn">Continue</button>
  <button className="Loginbtn" style={{marginLeft:"20px"}}>I already have!</button>
  <br/>
  <Link className="btn btn-danger" to='/App'>App</Link>
</form>
</div>

        </>
    )
    
}

export default Loginpage

//npm install react-router-dom