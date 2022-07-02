

import './index.css';
import React,{useState} from 'react';
import WorkerForm from './workerform';
import MenuPage from './menupage';
import HomePage from './homepage';
import GetWorkers from './showworkers';

function App() {
  
  const[page,setPage] = useState(<HomePage/>)
  return (
    <div className="bg-gray-900 h-screen w-screen text-neutral-400">
      <h1 className="text-center text-4xl font-bold mb-8 pt-5">
        Dvir PizzaShop
      </h1>
      <div className='navbar-container'>
        <ul className='flex font-bold mb-8'>
          <li className='w-1/3 h-8 text-center' onClick={() =>{setPage(window.location.reload())}}>Ofek</li>
          <div className='workersdrop w-1/3 text-center gap-y-2 flex flex-col items-center' >Worker
              <li className='workersdrop-content  bg-black h-10 w-32 absolute mt-7  ' onClick={() =>{setPage(<WorkerForm/>)}}>Add Worker</li>
              <li className='workersdrop-content  bg-black w-32 absolute mt-14' onClick={() =>{setPage(<GetWorkers />)}}>Show All Workers</li>
          </div>
          <li className='w-1/3 text-center' onClick={() =>{setPage(<MenuPage />)}}>Menu</li>  
        </ul>
      </div>
      {page}
    </div>
  );
}

export default App;
