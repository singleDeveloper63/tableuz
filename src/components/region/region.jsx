import React from 'react';
import './region.css';

function Region({name,sub}){
    let count = [];
    let subRegCount = [];
    for(var i = 0; i<sub.length;i++){
        subRegCount.push(i)
    }
    for(var j = 1;j<90;j++){
        count.push(j)
    }

    return(
        <React.Fragment>
            <tr className="regHead">
                {
                    count.map((item,index)=>{
                        return(
                            <td key={index}> {item === 1 && name} </td>
                        )
                    })
                }
            </tr>
            {
                subRegCount.map((item,index) => {
                    return(
                        <tr key={index}>
                            <td className="region"> {sub[item]} </td>
                            {
                                count.map((subreg,subindex)=>{
                                    return (
                                        <React.Fragment key={subindex}>
                                            { subreg<89 && <td contentEditable></td> }
                                        </React.Fragment>
                                    )
                                    
                                })
                            }
                        </tr>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Region;