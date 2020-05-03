import React,{useState,useEffect} from 'react'
import Illustrate_sort from '../component/Illustrate_sort'
import Handle_month from '../component/Handle_month'
import Handle_hour from '../component/Handle_hour'
import Handle_place from '../component/Handle_place'
import Handle_priceSort from '../component/Handle_priceSort'

function Illustrate_Sort_header(props) {



    return (
        <>
        <ul className="Illustrate-sort-box">
            {/* 分類 */}
            <li className="Illustrate-sort-list">
            <ul className="Illustrate-sort-list-content">
                    <li className="Illustrate-sort-list Illustrate-sort-title">
                        分類
                    </li>
                    <li className="Illustrate-sort-list">
                    
                <Illustrate_sort animalInfo={props.animalInfo}/>
                    </li>
                </ul>
            </li>
            
            {/* 月份 */}
            {/* 提供生物資料,跟選擇要顯示的月份資料做處理 */}
            <li className="Illustrate-sort-list">
            <ul className="Illustrate-sort-list-content">
                    <li className="Illustrate-sort-list Illustrate-sort-title">
                        出現月份
                    </li>
                    <li className="Illustrate-sort-list">
                    <Handle_month 
                animalInfo={props.animalInfo} 
                setShowMonth={(data)=>
                props.chooseShowMonth(data)}/>
                    </li>
                </ul>
                
            </li>
            
            {/* 時間 */}
            <li className="Illustrate-sort-list">
                <ul className="Illustrate-sort-list-content">
                    <li className="Illustrate-sort-list Illustrate-sort-title">
                        出現時間
                    </li>
                    <li className="Illustrate-sort-list">
                    <Handle_hour 
                    animalInfo={props.animalInfo} 
                    setShowTime={(data)=>
                    props.chooseShowTime(data)}/>
                    </li>
                </ul>
            </li>
            
            {/* 出現場所 */}
            <li className="Illustrate-sort-list">
                <ul className="Illustrate-sort-list-content">
                    <li className="Illustrate-sort-list Illustrate-sort-title">
                        出現場所
                    </li>
                    <li className="Illustrate-sort-list">
                    <Handle_place
                    animalInfo={props.animalInfo} 
                    setShowPlace={(data)=>
                    props.chooseShowPlace(data)}/>
                    </li>
                </ul>
            </li>

            {/* 價格順序 */}
            <li className="Illustrate-sort-list">
                <ul className="Illustrate-sort-list-content">
                    <li className="Illustrate-sort-list Illustrate-sort-title">
                        價格排序
                    </li>
                    <li className="Illustrate-sort-list">
                    <Handle_priceSort
                    animalInfo={props.animalInfo} 
                    setShowPlace={(data)=>
                    props.chooseShowPlace(data)}/>
                    </li>
                </ul>
            </li>

            <li className="Illustrate-count-data">共 {props.getanimalInfo.length} 筆資料</li>
            
        </ul>

        
        </>
    )
}

export default Illustrate_Sort_header