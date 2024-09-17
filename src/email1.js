import React from "react";

const Email1 = () => {

return(
    <div class="container rounded-4 bg-light d-flex justify-content-center email">
        <div class="row p-5">
   <div class="col-sm-6 text-dark">
    <h3 className="text-dark">See My Projects At Once & Leave Here Your E-mail Address </h3>
   </div>
  <div class="col-sm-6 inpp m-auto rounded-4">
    <div className="row p-1">
    <input type="email" placeholder="Email Address " className="inp1 rounded-4 bg-light col-sm-8"/>
    <button type="submit" className="btn2 text-ligth p-2 rounded-3 col-sm-4">submit</button>
   </div></div>
 </div>
    
  </div>)

}
export default Email1;