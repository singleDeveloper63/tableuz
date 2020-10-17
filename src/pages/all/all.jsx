import React, { useEffect, useState , useContext } from 'react';
import Regions from '../../components/regions/regions';
import Region from '../../components/region/region';
import st from './all.module.scss';
import { DataService } from '../../service';
import Loader from '../../components/loader/loader';


export default function All(){
  const [request , setRequest] = useState(true);
  const [printMode, setPrintMode] = useState(false);
  const [table,setTable] = useState([]);
  const [data,setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [city,setCity] = useState(18);
  
  useEffect(()=>{
    DataService.getAll()
      .then( res => {
        setData(res.data.sort(compare));
        setRequest(false);
      });
  },[])

  useEffect(()=>{
    data.forEach( item =>console.log(`${item.districts.length}`))
  },[data])

  function compare( a, b ) {
    if ( a.region.title < b.region.title ){
      return -1;
    }
    if ( a.region.title > b.region.title ){
      return 1;
    }
    return 0;
  }
  
  if(request){
    return <Loader/>
  }

  return(
    <div className={st.all}>
      <div className={st.all_content}>
        <Regions>
          <Region data={data[3]} number={1}/>
        </Regions>
      </div>
    </div>
  )
}