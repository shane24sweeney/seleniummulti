import React from 'react'
import DogDays from './HeadShot/dogdays.jpg';
const Home = () => {
 return (
   <div>
       <div className="image">
        <img src={DogDays}></img>
      </div>
     <h1> <p>Dog Days Rescue is a 501(c)3 rescue servicing Atlanta and surrounding areas. 
       Though small, we have big hearts for finding dogs their forever homes.
       </p>
     </h1>
     My dream is for all dogs to have a fair chance at a happy life. I can't do that without the help of many other people. Fosters, donors and adopters are an integral part of that dream. If you would like to help in anyway please let me know! I can be reached via message clicking on the email link above. 
     Please see my notes for ways to help!
<a href="mailto:adopt@dogdaysrescue.org"><h2>You May Contact Us By Selecting This Link</h2></a>
             

   </div>
 )

   
     
  }

  
export default Home;