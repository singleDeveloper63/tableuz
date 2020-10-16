import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';


function Navigation(){
    return(
        <div className="navigation">
            <Link to='/director'><i className="bx bx-table"></i> Umumiy xisobot </Link>
            <Link to='/all'><i className="bx bx-map-alt"></i> Tumanlar </Link>
            <Link to='/divided'><i className="bx bx-current-location"></i> Viloyatlar </Link>
        </div>
    )
}

export default Navigation;