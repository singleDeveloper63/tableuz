import React, { useEffect, useState , useContext } from 'react';
import Regions from '../../components/regions/regions';
import Region from '../../components/region/region';
import data from '../../data.json';
import st from './all.module.scss';
import Axios from 'axios';

export default function All(){

  const [printMode, setPrintMode] = useState(false);
  const [table,setTable] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [city,setCity] = useState(user.city);
  useEffect(()=>{
    console.log(city)
  })
  return(
    <div className={st.all}>
      <div className={st.all_content}>
        <Regions>
          {
            data.regions.map((item,index)=>{
              return(
                <Region canEditable={ index === 0 ? true : false } key={index} number={index+1} districtsOpen={printMode} name={item.name} sub={item.districts} onChange={ val => setTable(val)}/>
              )
            })
          }
        </Regions>
      </div>
    </div>
  )
}