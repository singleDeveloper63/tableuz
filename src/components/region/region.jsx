import React , { useEffect , useState } from 'react';
import './region.css';
import data from '../../data.json';

function Region({name,sub, onChange , onAdd , districtsOpen ,number , canEditable }){
    const cols = [];
    for(let i = 0; i<91; i++){
        cols.push(i);
    }
    let districtsList = [];
    sub.forEach((item,index)=>{
        districtsList.push({ id : `${number}.${index}`, title : item })
    })
    const rows = sub.length;
    let dRows = [];
    const dCols = cols.slice(0,cols.length-3);
    for(var i=0;i<rows;i++){
        dRows.push(dCols);
    }
    const [currentData,setCurrentData ] = useState(sub);
    return(
        <React.Fragment>
            <tr className="regHead">
                {
                    cols.map((item,index)=>{
                        return <td key={index}> { item === 0 ? number : item === 1 && name} </td>
                    })
                }
            </tr>
            {
                currentData.map((item,index)=>{
                    return(
                        <Cells order={index+1} onDistrictChange={ val => console.log()} key={index} district={item}/>
                    )
                })
            }
            <MakeCells onAdd={ val => setCurrentData([...currentData,val.title])} districts={districtsList} order={currentData.length+1}/>
        </React.Fragment>
    )

    function Cells({district , order , onDistrictChange}){
        let arr = cols.slice(0,cols.length - 3);
    

        return(
            <tr className={ canEditable ? "visibleRow" : "inVisibleRow" }>
                <td> {order} </td>
                <td> </td>
                <td className="region">
                    { district }
                </td>
                {
                    arr.map((item,index)=>{
                        return <td contentEditable={canEditable} key={index} onKeyUp={ e => {
                            arr[index] = e.currentTarget.innerText;
                            onDistrictChange(arr)
                        }}></td>
                    })
                }
            </tr>
        )
    }

    
    function MakeCells({districts , order , onAdd}){
        let arr = cols.slice(0,cols.length - 3);
        return(
            <tr className={ canEditable ? "visibleRow" : "inVisibleRow" }>
                <td> {order} </td>
                <td> </td>
                <td className="region">
                    <select defaultValue="0" onChange={ e => onAdd(districts.find( item => item.id === e.currentTarget.value))}>
                        <option defaultValue="0" value="0" selected=""></option>
                        {
                            districts.map((item,index)=>{
                                return(
                                    <option key={index} value={item.id}> {item.title} </option>
                                )
                            })
                        }
                    </select>
                </td>
                <td colSpan={arr.length}></td>
            </tr>
        )
    }
}


export default Region;

