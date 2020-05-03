import React ,{useState,useEffect} from 'react'
import Handle_hour_list from './Handle_hour_list'
import {Handle_AnimalShowTimeInfo,Handle_AnimalTimeArr} from '../util/Handle_AnimalInfo'

function Handle_hour(props) {

// console.log('Handle_hour',props)


const [getShowTime,setGetShowTime]=useState([])
const [showTimeArr,setShowTimeArr]=useState([])

useEffect(()=>{
    setGetShowTime(Handle_AnimalShowTimeInfo(props.animalInfo,showTimeArr,"time"))
},[showTimeArr])

useEffect(()=>{
    if(!props.formVal){
        props.setShowTime(getShowTime)
    }
    //getShowMonth 是生物ID
    // console.log('getShowTime',getShowTime)
},[getShowTime])

//透過這個函式決定是不是全選 及設定傳送的資料
function handleObj(obj){
    if(props.formVal){
        props.setTimeArr(obj.newData)
        props.setFormVal(obj.newObj)
        props.setError(obj.newErr)
        props.setAlldayForTime(obj.allcheck)
    }else{
        let newValue=obj.value
        let checkMonthSearchState=obj.checked
        if(checkMonthSearchState){
            setShowTimeArr(
                Handle_AnimalTimeArr(newValue,showTimeArr))
        }else{
            setShowTimeArr(Handle_AnimalTimeArr(newValue,showTimeArr))
        }
    }
    
}


    //月份DOM
    let hoursBox=[]
        for(let i=1;i<=24;i++){
            hoursBox.push(
                <>
                   <Handle_hour_list 
                   data={i}
                   handleObj={(obj)=>handleObj(obj)}
                    formVal={props.formVal}
                    error={props.error} 
                    timeArr={props.timeArr}
                    alldayForTime={props.alldayForTime}
                   />
                </>
            )
        }

    return (
        <>
            {hoursBox}
        </>
    )
}

export default Handle_hour
