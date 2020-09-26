import React from 'react';
import './regions.css';

function Regions({ children }){

    const arr = [];
    for (let index = 1; index < 91; index++) {
        arr.push(index)
        
    }

    return(
        <div className="regions">
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                    <tr>
                        <th rowSpan="4">т/р</th>
                        <th rowSpan="4"> Ҳудудлар </th>
                        <th rowSpan="4"> "Туман (Шаҳар)" </th>
                        <th rowSpan="4"> ИНН </th>
                        <th rowSpan="4"> Корхона номи </th>
                        <th rowSpan="4"> Корхона рахбарининг телефони </th>
                        <th rowSpan="4"> Корхонанинг фаолият йўналиши </th>
                        <th colSpan="31">Фаолият йўналиши (сохалари) </th>
                        <th colSpan="3">Импорт қилинган технологик ускунаси </th>
                        <th colSpan="3" className="yl">Технологик ускунаси (тўлиқ етиб келган)</th>
                        <th colSpan="3">Технологик ускунаси (қисман етиб келган)</th>
                        <th colSpan="3"> Сотишни режалаштираётган ёки суд  тартибида кўриб чиқилаётган муаммоси мавжуд </th>
                        <th colSpan="3">Технологик ускуна бўлмаган (эхтиёт қисим  ва бошқа)</th>
                        <th colSpan="36" className="yl"> Технологик ускунаси (тўлиқ етиб келган)лари  бўйича тўлдирилади.</th>
                    </tr>
                    <tr>
                        <th colSpan="10">Саноат</th>
                        <th colSpan="3">Хизмат кўрсатиш</th>
                        <th colSpan="8"> Қишлоқ, ўрмон ва балиқ хўжалиги сохаси</th>
                        <th colSpan="3"> Соғликни сақлаш ва ижтимоий хизматлар кўрсатиш	</th>
                        <th colSpan="3"> Ахборот ва алоқа </th>
                        <th rowSpan="3"> Қурилиш</th>
                        <th colSpan="3">Бошқа турлар</th>
                        <th rowSpan="3"> Ускуна сони </th>
                        <th rowSpan="3">олиб кирилган холат сони</th>
                        <th rowSpan="3">қиймати (минг доллар)</th>
                        <th rowSpan="3" className="yl">ускуна сони</th>
                        <th rowSpan="3" className="yl">олиб кирилган холат сони</th>
                        <th rowSpan="3" className="yl">қиймати (минг доллар)</th>
                        <th rowSpan="3"> ускуна сони</th>
                        <th rowSpan="3"> олиб кирилган холат сони</th>
                        <th rowSpan="3"> қиймати  (минг доллар)</th>
                        <th rowSpan="3"> ускуна сони</th>
                        <th rowSpan="3"> олиб кирилган холат сони</th>
                        <th rowSpan="3"> қиймати  (минг доллар)</th>
                        <th rowSpan="3"> ускуна сони</th>
                        <th rowSpan="3"> олиб кирилган холат сони</th>
                        <th rowSpan="3"> қиймати  (минг доллар)</th>
                        <th className="yl" rowSpan="2" colSpan="2"> Ишга туширилганлар</th>
                        <th className="yl" rowSpan="2" colSpan="3">Технологик ускуналар ишга тушириш ҳисобига эришилган натижа </th>
                        <th className="yl" rowSpan="2" colSpan="2">Сотиб юборилган </th>
                        <th className="yl" rowSpan="2" colSpan="2"> Ишга туширилмаганлар</th>
                        <th className="yl" rowSpan="2" colSpan="2">Ишга тушириш бўйича тармоқ жадваллари </th>
                        <th className="yl" colSpan="6"> Шундан  (ишга туширилмаганлар)</th>
                        <th className="yl" colSpan="2" rowSpan="2">Ишга туширилмаган муаммоси йўқ ускуналар </th>
                        <th className="yl" colSpan="2" rowSpan="2">Шундан </th>
                        <th className="yl" colSpan="2" rowSpan="2">Ишга туширилмаган муаммоси бор ускуналар </th>
                        <th className="yl" colSpan="10">Импорт қилинган технологик ускуналарнинг ишга туширилмаслик сабаблари</th>
                        <th className="yl" colSpan="3" rowSpan="2">Технологик ускуналар ишга тушириш ҳисобига эришиладиган натижа </th>
                    </tr>
                    <tr>
                        <th className="v" rowSpan="2"><p>Тўқимачилик ва тикув-трикотаж саноати соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Чарм саноати соҳаси	Кон-металлургия соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Кимё саноати соҳаси	</p></th>
                        <th className="v" rowSpan="2"><p>Электротехникани ривожлантириш соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Автомобиль саноати соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Нефтгаз соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Озиқ-овқат маҳсулотларини ишлаб чиқариш</p></th>
                        <th className="v" rowSpan="2"><p>Энергетика соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Дон ва унни қайта ишлаш соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Бошқа</p></th>

                        <th className="v" rowSpan="2"><p>Савдо</p></th>
                        <th className="v" rowSpan="2"><p>Умумий овқатланиш</p></th>
                        <th className="v" rowSpan="2"><p>Бошқа</p></th>

                        <th className="v" rowSpan="2"><p>Боғдорчилик ва узумчилик</p></th>
                        <th className="v" rowSpan="2"><p>Иссиқхона фаолияти</p></th>
                        <th className="v" rowSpan="2"><p>Ўрмон хўжалиги</p></th>
                        <th className="v" rowSpan="2"><p>Чорвочилик фаолияти</p></th>
                        <th className="v" rowSpan="2"><p>Балиқчилик фаолияти</p></th>
                        <th className="v" rowSpan="2"><p>Асаларичилик фаолияти</p></th>
                        <th className="v" rowSpan="2"><p>Паррандачилик фаолияти</p></th>
                        <th className="v" rowSpan="2"><p>Бошқа</p></th>

                        <th className="v" rowSpan="2"><p>Соғлиқни сақлаш соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Фармацевтика соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Бошқа</p></th>

                        <th className="v" rowSpan="2"><p>Ахборот технологиялари ва коммуникация соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Нашриёт-матбаа соҳаси</p></th>
                        <th className="v" rowSpan="2"><p>Бошқа</p></th>

                        <th className="v" rowSpan="2"><p>Буларга таълуқли бўлмаган сохалар бўлса қўшимча янги  графа очиш мумкин.</p></th>
                        <th className="v" rowSpan="2"></th>
                        <th className="v" rowSpan="2"></th>

                        
                        <th className="yl" colSpan="3">муддатида ишга туширилмаган	 </th>
                        <th className="yl" colSpan="3">Ишга тушириш муддати келмаганлари</th>

                    

                        <th className="yl v" rowSpan="2"> <p> Ер муаммоси</p> </th>
                        <th className="yl v" rowSpan="2"> <p>Кредит муаммоси </p> </th>
                        <th className="yl v" rowSpan="2"> <p> Лицензия муаммоси</p> </th>
                        <th className="yl v" rowSpan="2"> <p>Газга уланиш муаммоси  </p> </th>
                        <th className="yl v" rowSpan="2"> <p>Сувга улуниш муаммоси </p> </th>
                        <th className="yl v" rowSpan="2"> <p>Электор тармоғига уланиш муаммоси </p> </th>
                        <th className="yl v" rowSpan="2"> <p>Чет элдан мутахассис келмаётгани </p> </th>
                        <th className="yl v" rowSpan="2"> <p> Пандемия сабабли ишга тушмаган</p> </th>
                        <th className="yl v" rowSpan="2"> <p> Бошқа муаммолар</p> </th>
                        <th className="yl w-100p" rowSpan="2"> Изоҳ</th>
                    </tr>
                    <tr>
                        <th className="yl">ускуна сони</th>
                        <th className="yl">қиймати  (минг доллар)</th>
                        <th className="yl"> Йиллик ишлаб чиқариш хажми (млн.сўмда) </th>
                        <th className="yl"> Экспорт хажми (минг. долл) </th>
                        <th className="yl"> Яратилган иш ўринлари </th>
                        <th className="yl"> ускуна сони </th>
                        <th className="yl"> қиймати (минг доллар) </th>
                        <th className="yl"> ускуна сони </th>
                        <th className="yl"> қиймати (минг доллар) </th>
                        <th className="yl v"> <p>Тасдиқланганлари </p></th>
                        <th className="yl v"> <p>Тасдиқланмаганлари</p> </th>

                        <th className="yl">Белгиланган муддат Сана)	</th>
                        <th className="yl">ускуна сони	</th>
                        <th className="yl">қиймати (минг доллар)</th>
                        
                        <th className="yl">Белгиланган муддат (Сана)</th>
                        <th className="yl">ускуна сони	</th>
                        <th className="yl">қиймати (минг доллар)</th>
                        <th className="yl">ускуна сони</th>
                        <th className="yl">қиймати (минг доллар)</th>

                        <th className="yl v"><p>Қурилиш ишлари якунига етказилмаган</p></th>
                        <th className="yl v"><p>Монтаж ишлари олиб борилмоқда</p></th>

                        <th className="yl">ускуна сони</th>
                        <th className="yl">қиймати (минг доллар)</th>

                        <th className="yl">Йиллик ишлаб чиқариш хажми (млн.сўмда)</th>
                        <th className="yl">Экспорт хажми (минг. долл)</th>
                        <th className="yl">Яратиладиган иш ўринлари</th>
                    </tr>
                    <tr>
                        {
                            arr.map((item,index)=>{
                                return(
                                    <td className="bl" key={index}> {item} </td>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    { children }
                </tbody>
            </table>
        </div>
    )
}

export default Regions;