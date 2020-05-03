import React,{useState,useEffect} from 'react'
import '../css/main.css'
import '../css/InsertInfo.css'

function Handle_priceSortBox_list(props){
// console.log(props)
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


    function catchTimeValue(e){
        if(e.target.checked){
            setColorState(true)
        }else{
            setColorState(false)
        }
        props.handle_ShowplaceName(e)
        
    }


    return (
        <>
            <label htmlFor={props.data} className="hour-list" style={colorState?choose:noChoose} ><span>{props.data}</span>
            <input type="checkbox" className="hour-list-input" value={props.data} id={props.data}  checked={colorState} onClick={(e)=>{ catchTimeValue(e)}}/></label>
        </>
    )
}

export default Handle_priceSortBox_list