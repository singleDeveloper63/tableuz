import React, { useState , useEffect } from 'react';
import './director.css';
import data from '../../data.json';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPdf from 'react-to-pdf';

function Director(){
    let cols = [];
    const ref = React.createRef();

    for(let i=0; i<12; i++){
        cols.push(i);
    }
    return(
        <div className="directorpage">
            <ReactHTMLTableToExcel
                    id="download"
                    className="download"
                    table="director"
                    filename="umumiy xisobot"
                    sheet="tablexls"
                    buttonText="XLS formatda yuklash"
                    />
            <ReactToPdf  options={{orientation : "landscape"}} x={4} y={10} targetRef={ref} filename="umumiy-xisobot.pdf">
                {({toPdf}) => (
                    <button className="download" onClick={toPdf}><i className="bxs bx-file-pdf"></i> PDF formatda yuklash</button>
                )}
            </ReactToPdf>
            <table className="director" id="director" ref={ref}>
                <thead>
                    <tr>
                        <th rowSpan={3}>№</th>
                        <th rowSpan={3}>Ҳудуд</th>
                        <th colSpan={3} rowSpan={2}>Технологик ускуна тўлиқ етиб келган</th>
                        <th colSpan={6}>Шундан</th>
                        <th colSpan={3}>Эришилган натижа (тўлиқ ишга туширилган бўйича)</th>
                    </tr>
                    <tr>
                        <th colSpan={3}>Тенологик ускунаси ишга туширилган</th>
                        <th colSpan={3}>Технологик ускунаси ишга туширилмаган</th>
                        <th rowSpan={2}>Йиллик ишлаб чиқариш хажми      (млрд сўм)	</th>
                        <th rowSpan={2}>Шу жумладан экспорт хажми млн доллар)</th>
                        <th rowSpan={2}>Яратилган ишчи ўрни </th>
                    </tr>
                    <tr>
                        <th> субъект сони</th>
                        <th>ускуна сони</th>
                        <th>қиймати (млн доллар)</th>
                        <th> субъект сони</th>
                        <th>ускуна сони</th>
                        <th>қиймати (млн доллар)</th>
                        <th> субъект сони</th>
                        <th>ускуна сони</th>
                        <th>қиймати (млн доллар)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="all">
                        <td colSpan={2}>Ўзбекистон Республикаси	</td>
                        {
                            cols.map((item)=>{
                                return(
                                    <td key={item}></td>
                                )
                            })
                        }
                    </tr>
                    {
                        data.regions.map((item,index)=>{
                            return <MakeRegion region={item.name} index={index+1} key={index}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )


    function MakeRegion({region , index}){
        useEffect(()=>console.log(region))
        return(
            <tr>
                <td> {index} </td>
                <td className="title"> {region} </td>
                {
                    cols.map((item)=>{
                        return(
                            <td key={item}></td>
                        )
                    })
                }
            </tr>
        )
    }
}


export default Director;