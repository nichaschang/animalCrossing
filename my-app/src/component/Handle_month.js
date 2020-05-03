import React ,{useState,useEffect} from 'react'
import {getMonth} from '../util/Handle_ShowMonthTime'
import {handle_Showtime} from '../util/Handle_Showtime'
import {Handle_AnimalShowTimeInfo,Handle_AnimalTimeArr} from '../util/Handle_AnimalInfo'
import Handle_month_List from './Handle_month_List'
import '../css/Handle_month.css'

function Handle_month(props) {

    // console.log(props)


//分類月份
const [getShowMonth,setGetShowMonth]=useState([]) //生物ID
const [monthArr,setMonthArr]=useState([]) //要顯示的月份

//新增生物的函式
function hadleInfoforForm(obj){
    props.setMonthArr(obj.newData)
    props.setFormVal(obj.newObj)
    props.setError(obj.newErr)
}


//獲取新的要顯示的月份生物ID
useEffect(()=>{
    console.log('monthArr',monthArr)
    setGetShowMonth(Handle_AnimalShowTimeInfo(props.animalInfo,monthArr,"month"))
},[monthArr])


useEffect(()=>{
    if(!props.formVal){
        props.setShowMonth(getShowMonth)
    }
    //getShowMonth 是生物ID
},[getShowMonth])



function catchMonthValue(e){
    //處理新增生物
    if(props.formVal){
        hadleInfoforForm(handle_Showtime(e,props.monthArr,props.error,props.formVal,'showMonth')) 
    }else{
        //設定顯示月份
        let newValue=e.target.value
            setMonthArr(Handle_AnimalTimeArr(newValue,monthArr))
        
    }
}

    //月份DOM
    let monthBox=[]
        for(let i=1;i<=12;i++){
            let monthName=getMonth(i)
            monthBox.push(
                <>
                <Handle_month_List 
                    data={i}
                    monthName={monthName}
                    catchMonthValue={e=>catchMonthValue(e)}
                />
                </>
            )
        }

    

    return (
        <>
            {monthBox}
        </>
    )
}

export default Handle_month
