import React, { useEffect, useState , useContext} from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js';
import { All , Login ,Director , Divided} from './pages';
import Navigation from './components/navigation/navigation';

import { Switch , Route } from 'react-router-dom';

function App(){
   if(localStorage.getItem("user")){
        return(
           <React.Fragment>
              <Navigation/>
               <Switch>
                  <Route exact path='/director' component={Director}/>
                  <Route exact path='/' component={All}/>
                  <Route exact path='/all' component={All}/>
                  <Route exact path='/divided' component={Divided}/>
               </Switch>
           </React.Fragment>
      )
   }else{
        return(
          <Login/>
      )
   }
}

export default App;