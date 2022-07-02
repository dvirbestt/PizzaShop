import React, { useEffect, useState } from "react";

export default function GetWorkers (){

     const [workers,setWorkers] = useState('')

     const getWorkers = async () => {
          let response = await fetch("http://192.168.14.76:8080/worker/getAll");
          let data = await response.json();
          
          setWorkers(data.map((d)=>(
              
              
          <div className="flex border mb-5 space-x-2 w-96">
               <div className="worker pic">
                  <img className="w-32 h-40  " src={d.photoUrl === "" ? "http://placekitten.com/g/75/75" : `images/${d.photoUrl}` } alt="pp"/>
                </div>
                <div className="flex flex-col">
                  <span>name: {d.name}</span><br/>
                 <span>address: {d.address}</span><br/>
                   <span>branch: {d.branch}</span><br/>
                 </div>
          </div>
          )))
      
        };

        useEffect(()=>{getWorkers()},[])

     return(
          workers
     )

}