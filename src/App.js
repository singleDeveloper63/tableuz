import React, { useEffect, useState , useContext} from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js';
import { All , Login } from './pages';
import { Switch , Route } from 'react-router-dom';
function App(){
   if(localStorage.getItem("user")){
        return(
          <All/>
      )
   }else{
        return(
          <Login/>
      )
   }
}

export default App;