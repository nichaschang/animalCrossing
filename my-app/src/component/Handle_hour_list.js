import React,{useState,useEffect} from 'react'
import '../css/main.css'
import '../css/InsertInfo.css'
import {handle_Showtime} from '../util/Handle_Showtime'

function Handle_hour_list(props){
// console.log(props.timeArr)
    const [colorState,setColorState]=useState(false)


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

    // useEffect(()=>{
    //     console.log('props.time',props.timeArr)
    // },[])
    // useEffect(()=>{
    //     console.log('colorState',colorState)
    // },[colorState])

    useEffect(()=>{
        // console.log(props.timeArr.length)
        if(props.timeArr){
            if(props.timeArr.length==24){
                setColorState(true)
            }else if(props.timeArr.length==0){
                setColorState(false)
            }
        }
        
    },[props.alldayForTime])

    function catchTimeValue(e){
        setColorState(!colorState)
        if(props.timeArr){
            props.handleObj(handle_Showtime(e,props.timeArr,props.error,props.formVal,'showTime',props.alldayForTime))
        }else{
            props.handleObj(e.target)
        }
        

    }


    return (
        <>
            <label htmlFor={`Hours-${props.data}`} className="hour-list" style={colorState?choose:noChoose} ><span>{props.data<10?`0${props.data}時`:`${props.data}時`}</span>
            <input type="checkbox" className="hour-list-input" value={props.data} id={`Hours-${props.data}`}  checked={colorState} onClick={(e)=>{ catchTimeValue(e)}}/></label>
        </>
    )
}

export default Handle_hour_list