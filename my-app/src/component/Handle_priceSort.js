import React ,{useState,useEffect} from 'react'
import Handle_priceSortBox_list from './Handle_priceSortBox_list'
import {Handle_AnimalpriceSortNameInfo} from '../util/Handle_AnimalInfo'


function Handle_priceSort(props) {

// console.log('Handle_priceSort',props)

const [sortPriceState,setSortPriceState]=useState('預設')

let priceSortBox=['預設','小至大','大至小']

    //沒選擇的狀態
    const noChoose={
        backgroundColor:'#999',
        }
    
        //選擇的狀態
        const choose={
        backgroundColor:'#0a8',
        border:'3px solid #0c8',
        opacity:'0.85'
        }




function handle_ShowPriceSortName(e){
    if(e.target.checked){
        setSortPriceState(e.target.value)
    }
    console.log(e.target.checked)
}


    //月份DOM
    let priceBox=[]
    priceSortBox.map((v,i)=>{
        priceBox.push(
            <>
            <label htmlFor={Handle_AnimalpriceSortNameInfo(v)} className="hour-list" style={sortPriceState==v?choose:noChoose} ><span>{v}</span>
            <input type="radio" name="priceBox" className="hour-list-input" value={v} id={Handle_AnimalpriceSortNameInfo(v)} onClick={(e)=>{ handle_ShowPriceSortName(e)}}/></label>
            </>
        )
    })
            
        

    return (
        <>
            {priceBox}
        </>
    )
}

export default Handle_priceSort
