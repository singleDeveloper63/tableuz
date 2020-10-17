import React, { useState , useEffect } from 'react';
import './region.css';

function Region({data , onChange , number}){

    const cols = new Array(89);
    cols.fill("Yo'q",0,cols.length);

    const districtCols = new Array(88);
    districtCols.fill(0,0,districtCols.length);

    const [all, setAll] = useState(()=> data.all.length<88 ? cols : data.all )
    const [districts , setDistricts] = useState( data.districts.sort(compare))
    const [districtCells , setDistrictCells] = useState(districtCols)


    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

    return(
        <>
            <tr>
                <td> {number} </td>
                <td className={"region"}> { data.region.title } </td>
                {
                    all.map((item,index)=>{
                        return <td key={index}> {item} </td>
                    })
                }
            </tr>
            <Available/>
            <Create/>
        </>
    )

    function Available(){
        return(
            districts.map((item,index)=>{
                return(
                    <tr key={item.id}>
                        <td> {index+1} </td>
                        <td></td>
                        <td className="region"> { item.title } </td>
                        {
                            districtCells.map((item,index2)=>{
                                return(
                                    <td key={index2}> {item} </td>
                                )
                            })
                        }
                    </tr>
                )
            })
        )
    }

    function Create(){
        return(
            <tr className="withSelect">
                <td></td>
                <td></td>
                <td>
                    <select onChange={ e => setDistricts([...districts , districts.find( item => item.id === Number(e.currentTarget.value) && item )])}>
                        <option defaultValue selected></option>
                        {
                            districts.map((item,index)=>{
                                return(
                                    <option value={item.id}> {item.title} </option>
                                )
                            })
                        }
                    </select>
                    <span> Tuman qo'shish </span>
                </td>
                {
                    districtCells.map((item,index)=>{
                        return(
                            <td key={index}> {item} </td>
                        )
                    })
                }
            </tr>
        )
    }
}

export default Region;