import React from 'react';
import { HashLoader } from 'react-spinners';
import './loader.css';

function Loader(){
    return(
        <div className="loader">
            <HashLoader loading={true} size={150} color={"#fff"}/>
            <h2>Iltimos kutib turing...</h2>
        </div>
    )
}

export default Loader;