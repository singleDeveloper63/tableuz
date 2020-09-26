import React from 'react';
import Regions from './components/regions/regions';
import Region from './components/region/region';
import './App.css';

export default function App(){

  const regList = [
    "Тўрткўл тумани",
    "Чимбой тумани",
    "Амударё тумани",
    "Беруний тумани",
    "Қонликўл тумани",
    "Шуманай тумани",
    "Кегейли тумани",
    "Хўжайли тумани",
    "Тахиатош тумани",
    "Бозатау тумани",
    "Нукус тумани",
    "Элликқалъа тумани",
    "Қараўзак тумани",
    "Муйноқ тумани",
    "Қўнғирот тумани",
    "Тахтакўпир тумани",
    "Нукус шахар"
  ]

  return(
    <div className="content">
      <div className="table">
        <div>
          <Regions>
            <Region name="Қорақалпоғистон Республикаси" sub={regList}/>
          </Regions>
        </div>
      </div>
    </div>
  )
}

