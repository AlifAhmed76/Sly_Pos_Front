
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom';
import './assets/css/style.scss';
import "./assets/css/styles.css";

import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectRouter from './components/router/ProjectRouter';
import PublicRouter from './components/router/PublicRouter';


function App() {
   
   const [auth,setAuth] = useState(false);

   useEffect(()=>{
    if(localStorage.token !=undefined){
      setAuth(true);
      axios.defaults.headers.common['Authorization']=`Bearer ${localStorage.token}`;
    }
  },[])
    
   
  return (
    <>

    {
      auth?
      <RouterProvider router={ProjectRouter}/>:
      <RouterProvider router={PublicRouter}/>
    }
       
    </>
  )
}

export default App
