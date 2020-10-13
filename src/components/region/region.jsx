import React , { useEffect , useState } from 'react';
import './region.css';


function Region({name,sub, onChange , districtsOpen ,number , canEditable }){
    const cols = [];
    for(let i = 0; i<91; i++){
        cols.push(i);
    }
    const rows = sub.length;
    let dRows = [];
    const dCols = cols.slice(0,cols.length-3);
    for(var i=0;i<rows;i++){
        dRows.push(dCols);
    }
    const [districtsData,setDistrictsData] = useState(dRows);
    useEffect(()=>{
        console.log(districtsData.length);
    },[])

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
                sub.map((item,index)=>{
                    return(
                        <MakeCells onDistrictChange={ ()=>console.log()} isOpen={canEditable} district={item} order={index+1} key={index} />
                    )
                })
            }
        </React.Fragment>
    )

    function MakeCells({district , order , onDistrictChange}){
        let arr = cols.slice(0,cols.length - 3);
    

        return(
            <tr className={ canEditable ? "visibleRow" : "inVisibleRow" }>
                <td> {order} </td>
                <td> </td>
                <td className="region" > {district} </td>
                {
                    arr.map((item,index)=>{
                        return <td contentEditable={true} key={index} onKeyUp={ e => {
                            arr[index] = e.currentTarget.innerText;
                            onDistrictChange(arr,order-1,index)
                        }}></td>
                    })
                }
            </tr>
        )
    }
}

export default Region;