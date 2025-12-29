import { Link } from "react-router-dom";
function Loginpage(){
    return(

        <>
        <div>

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
    );
}
export default Loginpage