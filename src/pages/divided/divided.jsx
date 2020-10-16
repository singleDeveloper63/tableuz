import React , { useState , useEffect } from 'react';
import './divided.css';
import data from '../../data.json';
import { Link } from 'react-router-dom';

function Divided(){
    return(
        <div className="divided">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th rowSpan={5}>№</th>
                            <th rowSpan={5}>Ҳудуд</th>
                            <th colSpan={3}>Божхона органлари маълумоти бўйича технологик ускуна импорт қилган тадбиркорлик субъектлари	</th>
                            <th colSpan={15}>Шундан	</th>
                            <th colSpan={13}>Тўлиқ етиб келган технологик ускуналар бўйича 	</th>
                            <th colSpan={3}>Эришилган натижа (тўлиқ ишга туширилган бўйича)</th>
                        </tr>
                        <tr>
                            <th rowSpan={4}>Сони</th>
                            <th rowSpan={4}>Олиб кирилган холат сони</th>
                            <th rowSpan={4}>Технологик ускуна қиймати  </th>
                            <th rowSpan={2} colSpan={4}>Технологик ускунаси (тўлиқ етиб келган)</th>
                            <th rowSpan={2} colSpan={4}>Технологик ускунаси (қисман етиб келган)</th>
                            <th rowSpan={2} colSpan={4}>Сотишни режалаштираётган ёки суд  тартибида кўриб чиқилаётган муаммоси мавжуд </th>
                            <th rowSpan={2} colSpan={3}>Технологик ускуна бўлмаган (эхтиёт қисим  ва бошқа)</th>
                            <th rowSpan={2} colSpan={4}>Тенологик ускунаси тўлик ишга туширилган</th>
                            <th rowSpan={2} colSpan={3}>Ишга туширилмаган</th>
                            <th colSpan={6}>Ишга туширилмаган субъектлар бўйича </th>
                            <th rowSpan={4}>Йиллик ишлаб чиқариш хажми (млн.сўмда)</th>
                            <th rowSpan={4}>Шу жумладан экспорт хажми (минг.АҚШ долл)</th>
                            <th rowSpan={4}>Яратилган ишчи ўрни</th>
                        </tr>
                        <tr>
                            <th colSpan={3}>Тармоқ жадвал тасдиқланган</th>
                            <th colSpan={3}>Тармоқ жадвал тасдиқланмаган</th>
                        </tr>
                        <tr>
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>олиб кирилган холат сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>олиб кирилган холат сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>олиб кирилган холат сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>олиб кирилган холат сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>

                            
                            <th rowSpan={2}>субъект сони</th>
                            <th>шу жумладан </th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                            
                            <th rowSpan={2}>субъект сони</th>
                            <th rowSpan={2}>ускуна сони</th>
                            <th rowSpan={2}>қиймати (минг доллар)</th>
                        </tr>
                        <tr>
                            <th>тармоқ жадвали асосида ишга тушган субъектлар</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MakeRegion title={2} number={1}/>
                        {
                            data.regions.map((item,index)=>{
                                return(
                                    <MakeRegion title={item.name} number={index+1} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

    function MakeRegion({title , number , values=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]}){
        const cols = [];
        for( let i = 0 ; i<34 ; i++ ){
            cols.push(i);
        }
        return(
            <tr>
                <td> {number} </td>
                <td className="regHead"> { title } </td>
                {
                    cols.map((item)=>{
                        return(
                            <td key={item}> { title === 2 && values[item]} </td>
                        )
                    })
                }
            </tr>
        )
    }
}

export default Divided;