import React, { useState } from "react";

//need to do Java Validation on form
//need to change get workers to another JSX


export default function WorkerForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  let [photoUrl,setPhotoUrl] = useState("");
  const [isAdded,setIsAdded] = useState()
  

  const handleClick = async (e) => {
    e.preventDefault();
    if(photoUrl.length < 3){
      photoUrl = "kitten.jpg"
    }
    const worker = { name, address, branch,photoUrl };
      let response = await fetch("http://192.168.14.76:8080/worker/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(worker),
      })
      
      let data = await response.json()
      if(data[0]==="Added Successfully"){
        setName('')
        setAddress('')
        setBranch('')
        setPhotoUrl('')
        setIsAdded(<div className="bg-teal-100  border-teal-500 rounded  px-4 py-3 shadow-md">{data[0]}</div>)
       }else{
        setIsAdded(data.map((d)=>(<>
        <div className="w-40 h-12 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center content-center ">{d}</div>
        </>)))
       }
      
    
  };

  
  
  return (
  <>
  <div className="flex flex-col items-center">{isAdded}</div><br/>
    <form className="flex flex-col">
      <input
        className="worker_input"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input><br/>
      <input
       className="worker_input"
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      ></input><br/>
      <input
       className="worker_input"
        type="text"
        placeholder="branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        required
      ></input><br/>
      <input
       className="worker_input"
        type="text"
        value={photoUrl}
        placeholder="Photo Url"
        onChange={(e) => setPhotoUrl(e.target.value)}
        required
      ></input>
      <br />
      <button
        className="workers-button"
        type="submit"
        formAction="handleClick"
        onClick={handleClick}
      >Submit</button>
      
    </form>
    <div>
          
          
          
          
    </div>

    
 </>  
  );
}
