import {React,useState} from "react";
import Lottie from "lottie-react";
import animationData from './assets/Animation - 1726581686538.json';
const Section2=()=>{


  const [inp,setinp]=useState({First_Name:"",Last_Name:"",Email_Address:"",Phone_No:"" ,Message:""})
   
  const input =() =>{
  
    console.log(inp.First_Name)
    console.log(inp.Last_Name)
    console.log(inp.Email_Address)
    console.log(inp.Phone_No)
    console.log(inp.Message)
  }
  input()
  
  
  return(
        <section id="section2" className="mb-4 pb-5 sec2 d-flex justify-content-center">

<div class=" row d-flex justify-content-center">
<div class="col-sm-6 m-auto">
    <div className="an m-auto">
<Lottie animationData={animationData} /></div>
</div>


<div class="col-sm-6 pb-3 mb-3">
    <h2 className="text-light h1">Get In Touch</h2>
<div className="row">
<div class="col-sm-6 p-1 ">
      <input type="text" class="form-control text-light inp" placeholder="First Name" value={inp.First_Name} onChange={(e)=>setinp({...inp,First_Name:e.target.value})}/>
    </div>
    <div class="col-sm-6 p-1">
      <input type="text" class="form-control text-light inp" placeholder="Last Name" value={inp.Last_Name} onChange={(e)=>setinp({...inp,Last_Name:e.target.value})}/>
    </div>

    <div class="col-sm-6 p-1">
      <input type="email" class="form-control text-light inp " placeholder="Email Address" value={inp.Email_Address} onChange={(e)=>setinp({...inp,Email_Address:e.target.value})}/>
    </div>
    <div class="col-sm-6 p-1">
      <input type="password" class="form-control inp text-light" placeholder="Phone No." value={inp.Phone_No} onChange={(e)=>setinp({...inp,Phone_No:e.target.value})}/>
    </div>
    <div class="col-sm-12 p-1">
   <textarea class="form-control inp text-light" rows="5" id="comment" placeholder="Message" value={inp.Message} onChange={(e)=>setinp({...inp,Message:e.target.value})} name="text"></textarea>
</div>
</div>
<button type="submit" className="px-4 py-2 mb-3 my-3 border-0 rounded-1" >Send</button>

</div>
</div>
         

        </section>
    )

}
export default Section2