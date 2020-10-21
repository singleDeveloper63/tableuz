import React, { useState , useEffect } from 'react';
import './region.css';

function Region({data , onChange , number}){

    const cols = new Array(89);
    cols.fill("Yo'q",0,cols.length);

    const districtCols = new Array(88);
    districtCols.fill(0,0,districtCols.length);

    const [all, setAll] = useState(()=> data.all.length<88 ? cols : data.all.length>88 ? data.all.slice(0,88) : data.all )
    const [districts , setDistricts] = useState( data.districts.sort(compare))
    const [withValue , setWithValue] = useState([]);
    const [districtCells , setDistrictCells] = useState(districtCols)

    useEffect(()=>{
        console.log(withValue)
    },[withValue])

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
                <td> Barcha tumanlar </td>
                {
                    all.map((item,index)=>{
                        return <td key={index}> {item} </td>
                    })
                }
            </tr>
            {
                withValue.map((item,index)=>{
                    return(
                        <Available onCellChange={ val => console.log(val)} key={index} item={item} order={index+1}/>
                    )
                })
            }
            <Create onCreate={ val => {
                if(withValue.length === 0){
                    setWithValue([val])
                }else{
                    setWithValue([...withValue , val])
                }
            }}/>
        </>
    ) 

    function Available({item,order , onCellChange}){
        let values = new Array(88);
        values.fill(0,0,values.length);
        const [cellValues,setCellValues] = useState({ id : item.id , title : item.title , values : values });

        return(
                    <tr key={item.id} className="values">
                        <td> {order} </td>
                        <td></td>
                        <td className="region"> { item.title } </td>
                        {
                            districtCells.map((item,index2)=>{
                                return(
                                    <td className={index2<4 && 'stringContent'} suppressContentEditableWarning={true} contentEditable={true} key={index2}
                                    onKeyUp={ e =>{
                                        if(index2>3){
                                            if(e.key.match(/[0-9,.,'Backspace']/)){
                                                let editable = cellValues;
                                                editable.values[index2] = e.currentTarget.innerText;
                                                setCellValues(editable);
                                                onCellChange(editable)
                                            }else{
                                                e.currentTarget.innerText = ""
                                            }
                                        }else{
                                            let editable = cellValues;
                                            editable.values[index2] = e.currentTarget.innerText;
                                            setCellValues(editable);
                                            onCellChange(editable)
                                        }
                                    }}>
                                        {item}
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
    }

    function Create({onCreate}){
        return(
            <tr className="withSelect">
                <td></td>
                <td></td>
                <td className="region">
                    <select defaultValue={"000"} onChange={ e => {
                        let newDistrict = districts.find( item => item.id === Number(e.currentTarget.value) && item);
                        onCreate(newDistrict);
                    }}>
                        <option selected={true} value="000">Tanlanmagan</option>
                        {
                            districts.map((item,index)=>{
                                return(
                                    <option key={index} value={item.id}> {item.title} </option>
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